import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SubMark } from "@/components/brand/SubMark";
import { Principles } from "@/components/sections/Principles";
import { subBrands } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Nikko Eco — grupo de servicio inmobiliario integral. Cuidamos del lugar donde se vive, donde se trabaja y donde se invierte.",
  alternates: { canonical: "/sobre-nosotros" },
};

export default function SobreNosotrosPage() {
  return (
    <>
      <section className="bg-bone-300">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <Eyebrow>Sobre nosotros</Eyebrow>
          <h1
            className="mt-6 font-sans font-bold text-ink-900"
            style={{ fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 0.95, letterSpacing: "-0.045em" }}
          >
            Quiénes <span className="font-serif italic font-light text-amber-600">somos.</span>
          </h1>

          <div className="mt-10 space-y-7 text-[17px] leading-[1.65] text-ink-800/90">
            <p className="font-serif italic font-light text-[24px] leading-[1.35] tracking-[-0.015em] text-ink-800">
              Nikko Eco es un grupo de servicio inmobiliario integral con cuatro
              especialidades: Seguros, Hogar, Obras y Capital.
            </p>
            <p>
              Cuidamos del lugar donde se vive, donde se trabaja y donde se invierte.
              Nuestra propuesta es simple: una sola interlocución, un solo expediente y
              cuatro oficios técnicos que se coordinan internamente para que tú no
              tengas que hacerlo.
            </p>
            <p>
              Trabajamos sin opacidad y sin promesas vacías. Cuando damos un plazo, ese
              es el plazo. Cuando cerramos un presupuesto, ese es el precio. Y si no
              llegamos a tiempo, te lo compensamos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone-200">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <Eyebrow>Cuatro oficios</Eyebrow>
          <h2
            className="mt-5 max-w-3xl font-sans font-bold text-ink-900"
            style={{ fontSize: "clamp(28px, 4.2vw, 44px)", lineHeight: 1, letterSpacing: "-0.035em" }}
          >
            Una sola interlocución, <span className="font-serif italic font-light text-amber-600">cuatro equipos técnicos.</span>
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden border border-border-soft bg-border-soft sm:grid-cols-2 lg:grid-cols-4">
            {subBrands.map((s) => (
              <li key={s.slug} className="bg-bone-200 p-7">
                <Link
                  href={`/servicios/${s.slug}`}
                  className="group flex h-full flex-col justify-between gap-5"
                >
                  <SubMark brand={s.name as "Seguros" | "Hogar" | "Obras" | "Capital"} size="sm" tone="dark" />
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-400 transition-colors group-hover:text-amber-600">
                    {s.audience}
                    <span aria-hidden className="ml-1 inline-block transition-transform duration-[160ms] ease-out group-hover:translate-x-1">→</span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Principles />
    </>
  );
}
