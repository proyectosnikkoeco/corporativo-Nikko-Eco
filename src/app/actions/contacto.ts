"use server";

import { subBrands } from "@/lib/brand";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_SERVICES = subBrands.map((s) => s.slug) as string[];

/**
 * Server Action del formulario de contacto.
 *
 * Hoy valida y registra la solicitud en el log del servidor. Para enviar
 * el email de verdad, conecta aquí tu proveedor (p. ej. Resend o SMTP):
 *
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "web@nikkoeco.com",
 *     to: "ventas@nikkoeco.com",
 *     subject: `Nueva solicitud — ${name}`,
 *     replyTo: email,
 *     text: `${name} (${email}, ${phone})\nEspecialidad: ${service}\n\n${message}`,
 *   });
 *
 * La clave va en una variable de entorno (RESEND_API_KEY), nunca en el repo.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (name.length < 2) errors.name = "Dinos cómo te llamas.";
  if (!EMAIL_RE.test(email)) errors.email = "Revisa el email.";
  if (message.length < 10) errors.message = "Cuéntanos un poco más.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Revisa los campos marcados.", errors };
  }

  const safeService = VALID_SERVICES.includes(service) ? service : "general";

  // TODO: conectar proveedor de email (ver comentario arriba).
  console.info("[contacto] nueva solicitud", {
    name,
    email,
    phone,
    service: safeService,
    message,
  });

  return {
    status: "success",
    message: "Recibido. Un técnico nuestro te llama hoy.",
  };
}
