import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacta con ${brand.name} para solicitar presupuesto o más información.`,
};

export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Contacto
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-brand-secondary md:text-5xl">
            Cuéntanos tu proyecto.
          </h1>
          <p className="mt-6 text-brand-muted">
            Te enviamos un presupuesto claro y detallado en menos de 48 h
            laborables.
          </p>

          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-brand-secondary">Email</dt>
              <dd>
                <a
                  href={`mailto:${brand.contact.email}`}
                  className="text-brand hover:underline"
                >
                  {brand.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-secondary">Teléfono</dt>
              <dd>{brand.contact.phone}</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-secondary">Dirección</dt>
              <dd>{brand.contact.address}</dd>
            </div>
          </dl>
        </div>

        <form
          className="rounded-2xl border border-brand-line bg-brand-soft p-6 md:p-8"
          aria-label="Formulario de contacto"
        >
          <div className="grid gap-4">
            <label className="block text-sm">
              <span className="font-medium text-brand-secondary">Nombre</span>
              <input
                name="name"
                required
                className="mt-1 block w-full rounded-lg border border-brand-line bg-white px-3 py-2 text-sm outline-none focus:border-brand"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-brand-secondary">Email</span>
              <input
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-lg border border-brand-line bg-white px-3 py-2 text-sm outline-none focus:border-brand"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-brand-secondary">Empresa</span>
              <input
                name="company"
                className="mt-1 block w-full rounded-lg border border-brand-line bg-white px-3 py-2 text-sm outline-none focus:border-brand"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-brand-secondary">
                Cuéntanos tu proyecto
              </span>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-1 block w-full rounded-lg border border-brand-line bg-white px-3 py-2 text-sm outline-none focus:border-brand"
              />
            </label>
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-contrast transition-opacity hover:opacity-90"
            >
              Enviar
            </button>
            <p className="text-xs text-brand-muted">
              Al enviar aceptas nuestra política de privacidad.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
