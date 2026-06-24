import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SubMark } from "@/components/brand/SubMark";
import { subBrands } from "@/lib/brand";

export function SubBrandsGrid() {
  return (
    <section id="servicios" className="bg-bone-300">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <Eyebrow>Qué hacemos</Eyebrow>
          <h2
            className="mt-5 font-sans font-bold text-ink-900"
            style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 0.98, letterSpacing: "-0.04em" }}
          >
            Una marca madre, <span className="font-serif italic font-light text-amber-600">cuatro oficios.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-[1.55] text-ink-800/85">
            Cuidamos del lugar donde se vive, donde se trabaja y donde se invierte. Cada
            sub‑marca de Nikko es un equipo especializado con la misma exigencia: plazo,
            presupuesto y alcance comprometidos.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-border-soft bg-border-soft md:grid-cols-2">
          {subBrands.map((s) => (
            <li key={s.slug} className="bg-bone-200">
              <Link
                href={`/servicios#${s.slug}`}
                className="group flex h-full flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink-800">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6 p-8 md:p-10">
                  <div>
                    <SubMark brand={s.name as "Seguros" | "Hogar" | "Obras" | "Capital"} size="md" tone="dark" />
                    <p className="mt-5 text-[15px] leading-[1.55] text-ink-800/80">
                      {s.summary}
                    </p>
                  </div>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-400 transition-colors group-hover:text-amber-600">
                    {s.audience}
                    <span className="ml-1 inline-block transition-transform duration-[160ms] ease-out group-hover:translate-x-1">→</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
