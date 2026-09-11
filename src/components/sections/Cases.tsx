import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { caseStudies } from "@/lib/brand";

/**
 * Casos de referencia. No renderiza nada mientras `caseStudies` esté vacío
 * — ver la nota en lib/brand.ts.
 */
export function Cases() {
  if (caseStudies.length === 0) return null;

  return (
    <section className="bg-bone-300">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <Eyebrow>Casos</Eyebrow>
          <h2
            className="mt-5 font-sans font-bold text-ink-900"
            style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 0.98, letterSpacing: "-0.04em" }}
          >
            Lo que hemos <span className="font-serif italic font-light text-amber-600">entregado.</span>
          </h2>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden border border-border-soft bg-border-soft md:grid-cols-3">
          {caseStudies.map((c) => (
            <li key={c.slug} className="flex flex-col bg-bone-200">
              {c.image && (
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-800">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col gap-4 p-8">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-400">
                  {c.subBrand}
                </p>
                <h3 className="font-sans text-[20px] font-bold leading-tight tracking-[-0.03em] text-ink-900">
                  {c.title}
                </h3>
                <p className="text-[15px] leading-[1.55] text-ink-800/80">{c.summary}</p>
                {c.metric && (
                  <p className="mt-auto font-serif text-[24px] italic font-light leading-none text-amber-600">
                    {c.metric}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
