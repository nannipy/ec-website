import { NextResponse } from "next/server";
import { Resend } from "resend";

// In-memory rate limiting by client IP
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // max 5 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: Request) {
  try {
    // 1. IP extraction & Rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown-ip";

    if (clientIp !== "unknown-ip" && isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Troppe richieste inviate. Riprova tra un minuto." },
        { status: 429 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Chiave API Resend non configurata nel server." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, phone, service, message, honeypot } = body;

    // 2. Honeypot check: Bots will fill this hidden input
    if (honeypot) {
      // Return 200 OK silently to deceive spambots without sending email
      return NextResponse.json({ success: true });
    }

    // 3. Required fields validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Il nome è obbligatorio." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "L'email è obbligatoria." },
        { status: 400 }
      );
    }

    // 4. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Indirizzo email non valido." },
        { status: 400 }
      );
    }

    // 5. Length constraints (DoS / buffer prevention)
    if (name.length > 100) {
      return NextResponse.json(
        { error: "Il nome supera la lunghezza massima consentita (100 caratteri)." },
        { status: 400 }
      );
    }
    if (email.length > 150) {
      return NextResponse.json(
        { error: "L'email supera la lunghezza massima consentita." },
        { status: 400 }
      );
    }
    if (phone && (typeof phone !== "string" || phone.length > 30)) {
      return NextResponse.json(
        { error: "Il numero di telefono non è valido o troppo lungo." },
        { status: 400 }
      );
    }
    if (service && (typeof service !== "string" || service.length > 100)) {
      return NextResponse.json(
        { error: "Il campo servizio supera la lunghezza massima consentita." },
        { status: 400 }
      );
    }
    if (message && (typeof message !== "string" || message.length > 3000)) {
      return NextResponse.json(
        { error: "Il messaggio supera la lunghezza massima consentita (3000 caratteri)." },
        { status: 400 }
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const recipientEmail = process.env.RESEND_TO_EMAIL || "edocla.srls2560@gmail.com";

    const { data, error } = await resend.emails.send({
      from: fromEmail.includes("<") ? fromEmail : `EC Contatti <${fromEmail}>`,
      to: [recipientEmail],
      replyTo: email,
      subject: `Nuova richiesta di contatto da ${name}${service ? ` - ${service}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; padding: 24px; border-radius: 8px;">
          <h2 style="color: #ff5500; margin-top: 0; border-bottom: 2px solid #ff5500; padding-bottom: 8px;">
            Nuova richiesta di contatto dal sito
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px;">Nome:</td>
              <td style="padding: 8px 0;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Telefono:</td>
              <td style="padding: 8px 0;">${phone ? escapeHtml(phone) : "Non fornito"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Servizio richiesto:</td>
              <td style="padding: 8px 0;">${service ? escapeHtml(service) : "Non specificato"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; background-color: #f9f9f9; padding: 16px; border-radius: 6px; border-left: 4px solid #ff5500;">
            <p style="margin: 0 0 8px 0; font-weight: bold;">Messaggio / Descrizione:</p>
            <p style="margin: 0; white-space: pre-wrap;">${message ? escapeHtml(message) : "Nessun messaggio aggiuntivo."}</p>
          </div>
          
          <p style="margin-top: 24px; font-size: 12px; color: #777;">
            Questa email è stata inviata automaticamente dal modulo contatti del sito EC. Rispondendo a questa email scriverai direttamente a ${escapeHtml(email)}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: error.message || "Errore nell'invio dell'email tramite Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error("Internal Server Error:", err);
    const message = err instanceof Error ? err.message : "Errore interno del server";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
