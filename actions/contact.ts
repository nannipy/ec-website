"use server";

import { Resend } from "resend";

export type ContactState = {
  success: boolean;
  error?: string | null;
};

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitContactForm(
  _prevState: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  try {
    const honeypot = formData.get("honeypot")?.toString().trim() || "";
    // Honeypot check: Bots will fill this hidden input
    if (honeypot) {
      // Return success silently to deceive spambots without sending email
      return { success: true };
    }

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const service = formData.get("service")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    if (!name) {
      return { success: false, error: "Il nome è obbligatorio." };
    }

    if (!email) {
      return { success: false, error: "L'email è obbligatoria." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: "Indirizzo email non valido." };
    }

    if (name.length > 100) {
      return { success: false, error: "Il nome supera la lunghezza massima consentita (100 caratteri)." };
    }
    if (email.length > 150) {
      return { success: false, error: "L'email supera la lunghezza massima consentita." };
    }
    if (phone.length > 30) {
      return { success: false, error: "Il numero di telefono supera la lunghezza massima consentita." };
    }
    if (service.length > 100) {
      return { success: false, error: "Il campo servizio supera la lunghezza massima consentita." };
    }
    if (message.length > 3000) {
      return { success: false, error: "Il messaggio supera la lunghezza massima consentita (3000 caratteri)." };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY non impostata nell'ambiente.");
      return { success: false, error: "Servizio email temporaneamente non configurato." };
    }

    const resend = new Resend(apiKey);
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const recipientEmail = process.env.RESEND_TO_EMAIL || "edocla.srls2560@gmail.com";

    const { error } = await resend.emails.send({
      from: fromEmail.includes("<") ? fromEmail : `EC Contatti <${fromEmail}>`,
      to: [recipientEmail],
      replyTo: email,
      subject: `Nuova richiesta di contatto da ${name}${service ? ` - ${service}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; padding: 24px; border-radius: 8px;">
          <h2 style="color: #FD3F1F; margin-top: 0; border-bottom: 2px solid #FD3F1F; padding-bottom: 8px;">
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

          <div style="margin-top: 20px; background-color: #f9f9f9; padding: 16px; border-radius: 6px; border-left: 4px solid #FD3F1F;">
            <p style="margin: 0 0 8px 0; font-weight: bold;">Messaggio / Descrizione:</p>
            <p style="margin: 0; white-space: pre-wrap;">${message ? escapeHtml(message) : "Nessun messaggio aggiuntivo."}</p>
          </div>
          
          <p style="margin-top: 24px; font-size: 12px; color: #777;">
            Questa email è stata inviata automaticamente dal modulo contatti del sito EDOCLA. Rispondendo a questa email scriverai direttamente a ${escapeHtml(email)}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return { success: false, error: error.message || "Errore nell'invio dell'email." };
    }

    return { success: true };
  } catch (err: unknown) {
    console.error("Server action error:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Errore imprevisto durante l'invio.",
    };
  }
}
