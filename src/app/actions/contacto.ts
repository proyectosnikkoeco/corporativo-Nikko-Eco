"use server";

import { subBrands } from "@/lib/brand";
import { sendContactEmail } from "@/lib/mailer";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_SERVICES = subBrands.map((s) => s.slug) as string[];

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

  try {
    await sendContactEmail({
      name,
      email,
      phone,
      service: safeService,
      message,
    });
  } catch (err) {
    console.error("[contacto] fallo enviando email", err);
    return {
      status: "error",
      message:
        "No hemos podido enviar tu mensaje. Inténtalo de nuevo o escríbenos a info@nikkoeco.com.",
    };
  }

  return {
    status: "success",
    message: "Recibido. Un técnico nuestro te llama hoy.",
  };
}
