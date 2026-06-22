import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

/**
 * Configuración SMTP — Nikko Eco
 *
 * Las credenciales se leen de variables de entorno. Crea un archivo
 * `.env.local` en la raíz del proyecto a partir de `.env.example`.
 *
 * Valores típicos para IONOS:
 *   SMTP_HOST=smtp.ionos.es
 *   SMTP_PORT=587        (STARTTLS, recomendado)
 *   SMTP_USER=info@nikkoeco.com
 *   SMTP_PASS=••••••••
 *   MAIL_TO=ventas@nikkoeco.com
 *   MAIL_FROM_NAME=Web Nikko Eco
 */

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  mailTo: string;
  fromName: string;
};

function readConfig(): SmtpConfig {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const mailTo = process.env.MAIL_TO ?? user;
  const fromName = process.env.MAIL_FROM_NAME ?? "Web Nikko Eco";

  if (!host || !user || !pass || !mailTo) {
    throw new Error(
      "SMTP no configurado. Define SMTP_HOST, SMTP_USER, SMTP_PASS y MAIL_TO en .env.local",
    );
  }

  return { host, port, secure: port === 465, user, pass, mailTo, fromName };
}

let cached: Transporter | null = null;

function getTransporter(cfg: SmtpConfig): Transporter {
  if (cached) return cached;
  cached = nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.secure,
    auth: { user: cfg.user, pass: cfg.pass },
  });
  return cached;
}

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

/** Escapa caracteres HTML para incrustar texto del usuario en plantillas. */
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const SERVICE_LABEL: Record<string, string> = {
  seguros: "Nikko Seguros",
  hogar: "Nikko Hogar",
  obras: "Nikko Obras",
  capital: "Nikko Capital",
  general: "Consulta general",
};

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const cfg = readConfig();
  const transporter = getTransporter(cfg);

  const service = SERVICE_LABEL[payload.service] ?? payload.service;
  const subject = `Solicitud web — ${payload.name} · ${service}`;

  const text = [
    `Nueva solicitud desde la web de Nikko Eco`,
    ``,
    `Nombre:        ${payload.name}`,
    `Email:         ${payload.email}`,
    `Teléfono:      ${payload.phone || "—"}`,
    `Especialidad:  ${service}`,
    ``,
    `Mensaje:`,
    payload.message,
    ``,
    `---`,
    `Enviado desde nikkoeco.com · Responde a este correo para contactar con el cliente.`,
  ].join("\n");

  const html = `<!doctype html>
<html lang="es">
<head><meta charset="utf-8"><title>${esc(subject)}</title></head>
<body style="margin:0;padding:0;background:#EFEDE6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0A0E1A;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#EFEDE6;">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#F6F4ED;border-left:3px solid #F0B73E;">
        <tr><td style="padding:32px 32px 8px;">
          <p style="margin:0;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#4A5566;font-weight:600;">— Nueva solicitud web</p>
          <h1 style="margin:18px 0 4px;font-size:26px;line-height:1.1;letter-spacing:-0.03em;color:#0A0E1A;font-weight:700;">
            ${esc(payload.name)}
          </h1>
          <p style="margin:0;font-size:14px;color:#4A5566;">${esc(service)}</p>
        </td></tr>
        <tr><td style="padding:8px 32px 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;border-top:1px solid #E2E5EA;">
            <tr><td style="padding:12px 0;border-bottom:1px solid #E2E5EA;">
              <p style="margin:0;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:#8A92A0;font-weight:600;">Email</p>
              <p style="margin:4px 0 0;font-size:14px;"><a href="mailto:${esc(payload.email)}" style="color:#C78122;text-decoration:none;">${esc(payload.email)}</a></p>
            </td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #E2E5EA;">
              <p style="margin:0;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:#8A92A0;font-weight:600;">Teléfono</p>
              <p style="margin:4px 0 0;font-size:14px;">${esc(payload.phone || "—")}</p>
            </td></tr>
          </table>
          <p style="margin:24px 0 8px;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:#8A92A0;font-weight:600;">Mensaje</p>
          <p style="margin:0;font-size:15px;line-height:1.55;color:#0A0E1A;white-space:pre-wrap;">${esc(payload.message)}</p>
        </td></tr>
        <tr><td style="padding:20px 32px;background:#0A0E1A;color:rgba(239,237,230,0.65);">
          <p style="margin:0;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;">Nikko<i style="color:#F0B73E;font-style:italic;font-family:Georgia,serif;font-weight:300;"> Eco.</i> — nikkoeco.com</p>
          <p style="margin:6px 0 0;font-size:12px;">Responde a este correo para contactar directamente con ${esc(payload.name)}.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  await transporter.sendMail({
    from: `"${cfg.fromName}" <${cfg.user}>`,
    to: cfg.mailTo,
    replyTo: `"${payload.name}" <${payload.email}>`,
    subject,
    text,
    html,
  });
}
