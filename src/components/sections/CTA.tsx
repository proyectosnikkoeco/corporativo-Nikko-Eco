import { LinkButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function CTA() {
  return (
    <section className="bg-bone-300">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid items-end gap-10 border-l-2 border-amber-400 pl-8 md:grid-cols-[1.5fr_1fr] md:pl-12">
          <div>
            <Eyebrow>Siguiente paso</Eyebrow>
            <h2
              className="mt-5 font-sans font-bold text-ink-900"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 0.98, letterSpacing: "-0.04em" }}
            >
              Cuéntanos qué necesitas. <br className="hidden md:block" />
              <span className="font-serif italic font-light text-amber-600">Te llamamos hoy.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.55] text-ink-800/80">
              Un técnico nuestro te llama, escucha lo que necesitas y te enviamos un
              presupuesto cerrado. Sin letra pequeña.
            </p>
          </div>
          <div className="flex md:justify-end">
            <LinkButton href="/contacto" variant="primary" size="lg">
              Pide presupuesto
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
