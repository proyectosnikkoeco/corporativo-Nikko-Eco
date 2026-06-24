"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contacto";
import { Button } from "@/components/ui/Button";
import { subBrands } from "@/lib/brand";

const initial: ContactState = { status: "idle" };

const labelClass =
  "font-mono text-[10.5px] uppercase tracking-[0.22em] font-semibold text-ink-400";
const inputClass =
  "mt-2 block w-full rounded-xs border border-ink-200 bg-bone-100 px-4 py-3 text-[14px] text-ink-900 outline-none transition-colors hover:border-ink-400 focus:border-amber-500 focus:ring-0";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <div className="flex h-full flex-col justify-center border-l-2 border-amber-400 bg-bone-200 p-8 md:p-10">
        <p className={labelClass}>Recibido — te llamamos hoy</p>
        <p className="mt-4 font-serif italic font-light text-[26px] leading-[1.3] tracking-[-0.015em] text-ink-900">
          {state.message}
        </p>
        <p className="mt-4 text-[14px] leading-[1.6] text-ink-800/70">
          Si surge algo antes, escríbenos a info@nikkoeco.com.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="border-l-2 border-amber-400 bg-bone-200 p-8 md:p-10"
      aria-label="Formulario de contacto"
      noValidate
    >
      <p className={labelClass}>Pídenos presupuesto</p>
      <div className="mt-6 space-y-5">
        <label className="block">
          <span className={labelClass}>Nombre</span>
          <input name="name" className={inputClass} aria-invalid={!!state.errors?.name} />
          {state.errors?.name && (
            <span className="mt-1 block text-[12px] text-[var(--negative)]">
              {state.errors.name}
            </span>
          )}
        </label>

        <label className="block">
          <span className={labelClass}>Email</span>
          <input name="email" type="email" className={inputClass} aria-invalid={!!state.errors?.email} />
          {state.errors?.email && (
            <span className="mt-1 block text-[12px] text-[var(--negative)]">
              {state.errors.email}
            </span>
          )}
        </label>

        <label className="block">
          <span className={labelClass}>Teléfono</span>
          <input name="phone" className={inputClass} />
        </label>

        <label className="block">
          <span className={labelClass}>Especialidad</span>
          <select name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Elige…
            </option>
            {subBrands.map((s) => (
              <option key={s.slug} value={s.slug}>
                Nikko {s.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className={labelClass}>Cuéntanos tu proyecto</span>
          <textarea name="message" rows={5} className={inputClass} aria-invalid={!!state.errors?.message} />
          {state.errors?.message && (
            <span className="mt-1 block text-[12px] text-[var(--negative)]">
              {state.errors.message}
            </span>
          )}
        </label>

        <Button type="submit" variant="primary" size="lg" className="w-full" disabled={pending}>
          {pending ? "Enviando…" : "Enviar"}
        </Button>

        <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-400">
          {state.status === "error" && state.message
            ? state.message
            : "Te llamamos hoy"}
        </p>
      </div>
    </form>
  );
}
