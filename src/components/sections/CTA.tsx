import Link from "next/link";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="overflow-hidden rounded-3xl bg-brand p-10 text-brand-contrast md:p-16">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mt-3 max-w-xl text-brand-contrast/90">
              Cuéntanos qué necesitas y te enviamos un presupuesto claro,
              detallado y sin compromiso en menos de 48 h laborables.
            </p>
          </div>
          <Link
            href="/contacto"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-brand transition-opacity hover:opacity-90"
          >
            Solicitar presupuesto
          </Link>
        </div>
      </div>
    </section>
  );
}
