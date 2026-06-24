import { Eyebrow } from "@/components/ui/Eyebrow";
import { principles } from "@/lib/brand";

export function Principles() {
  return (
    <section className="bg-ink-800 text-bone-300">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <Eyebrow tone="accent">Cómo trabajamos</Eyebrow>
            <h2
              className="mt-5 font-sans font-bold text-bone-300"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 0.98, letterSpacing: "-0.04em" }}
            >
              No nos gustan <span className="font-serif italic font-light text-amber-400">las cosas a medias.</span>
            </h2>
          </div>
          <p className="font-serif italic font-light text-[22px] leading-[1.35] tracking-[-0.015em] text-bone-300/75">
            Ni las llamadas sin contestar. Ni los plazos sin cumplir. Ni los presupuestos sin
            cerrar. Por eso existe Nikko.
          </p>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden border border-border-inverse bg-border-inverse sm:grid-cols-2 lg:grid-cols-5">
          {principles.map((p, i) => (
            <li key={p.title} className="bg-ink-800 p-7">
              <p className="font-serif italic font-light text-[22px] leading-none text-amber-400">
                0{i + 1}
              </p>
              <h3 className="mt-5 font-sans font-bold text-[20px] tracking-[-0.03em] text-bone-300">
                {p.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.55] text-bone-300/70">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
