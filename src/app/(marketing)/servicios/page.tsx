import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SubMark } from "@/components/brand/SubMark";
import { CTA } from "@/components/sections/CTA";
import { subBrands } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Las cuatro especialidades de Nikko Eco: Seguros, Hogar, Obras y Capital. Una sola interlocución, expediente único.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-bone-300">
        <div className="mx-auto max-w-3xl px-6 pb-16 pt-24 md:pt-32">
          <Eyebrow>Servicios</Eyebrow>
          <h1
            className="mt-6 font-sans font-bold text-ink-900"
            style={{ fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 0.95, letterSpacing: "-0.045em" }}
          >
            Cuatro <span className="font-serif italic font-light text-amber-600">oficios.</span>
            <br /> Una sola <span className="font-serif italic font-light text-amber-600">interlocución.</span>
          </h1>
          <p className="mt-6 text-[17px] leading-[1.6] text-ink-800/85">
            Cada especialidad de Nikko es un equipo técnico propio. Coordinamos
            internamente para que tú trates con una sola persona.
          </p>
        </div>
      </section>

      <section className="bg-bone-300">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <ul className="grid gap-px overflow-hidden border border-border-soft bg-border-soft md:grid-cols-2">
            {subBrands.map((s) => (
              <li
                key={s.slug}
                id={s.slug}
                className="scroll-mt-36 flex flex-col bg-bone-200"
              >
                <Link
                  href={`/servicios/${s.slug}`}
                  className="group flex h-full flex-col"
                >
                  <ViewTransition name={`sub-${s.slug}`}>
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink-800">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </ViewTransition>
                  <div className="flex flex-1 flex-col p-10 md:p-12">
                    <SubMark brand={s.name as "Seguros" | "Hogar" | "Obras" | "Capital"} size="lg" tone="dark" />
                    <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-400">
                      {s.audience}
                    </p>
                    <p className="mt-6 text-[17px] leading-[1.6] text-ink-800/85">
                      {s.summary}
                    </p>
                    <p className="mt-8 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-700 transition-colors group-hover:text-amber-600">
                      Ver Nikko {s.name}
                      <span aria-hidden className="ml-1 inline-block transition-transform duration-[160ms] ease-out group-hover:translate-x-1">→</span>
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        eyebrow="Empieza aquí"
        titleLead="Dinos qué especialidad necesitas."
        titleAccent="Coordinamos por ti."
        body="Una sola persona te atiende. Internamente coordinamos el equipo técnico que toca según el caso. Sin pelotear entre oficinas."
        ctaLabel="Pedir presupuesto"
      />
    </>
  );
}
