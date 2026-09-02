import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Chiave API Resend non configurata nel server." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nome ed email sono campi obbligatori." },
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
