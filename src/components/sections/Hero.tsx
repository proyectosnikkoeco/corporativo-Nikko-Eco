import Link from "next/link";
import { brand } from "@/lib/brand";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {brand.name}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-brand-secondary md:text-5xl">
            {brand.claim}
          </h1>
          <p className="mt-6 max-w-lg text-lg text-brand-muted">
            {brand.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-contrast transition-opacity hover:opacity-90"
            >
              Pide presupuesto
            </Link>
            <Link
              href="/servicios"
              className="inline-flex h-12 items-center justify-center rounded-full border border-brand-line bg-white px-6 text-sm font-semibold text-brand-ink transition-colors hover:border-brand"
            >
              Ver servicios
            </Link>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-md justify-self-center">
          <div className="absolute inset-0 rounded-full bg-brand/10" />
          <div className="absolute inset-6 rounded-full bg-brand-accent/40" />
          <div className="absolute inset-12 rounded-full bg-white shadow-xl" />
          <div className="absolute inset-0 flex items-center justify-center text-brand">
            <svg viewBox="0 0 48 48" className="h-24 w-24" aria-hidden>
              <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <path
                d="M24 8 C16 16 16 32 24 40 C32 32 32 16 24 8 Z"
                fill="currentColor"
                opacity="0.85"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
