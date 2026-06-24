import { LinkButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Props = {
  eyebrow?: string;
  titleLead?: string;
  titleAccent?: string;
  body?: string;
  ctaLabel?: string;
};

export function CTA({
  eyebrow = "Siguiente paso",
  titleLead = "Cuéntanos qué necesitas.",
  titleAccent = "Te llamamos hoy.",
  body = "Un técnico nuestro te llama, escucha lo que necesitas y te enviamos un presupuesto cerrado. Sin letra pequeña.",
  ctaLabel = "Pide presupuesto",
}: Props = {}) {
  return (
    <section className="bg-bone-300">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid items-end gap-10 border-l-2 border-amber-400 pl-8 md:grid-cols-[1.5fr_1fr] md:pl-12">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2
              className="mt-5 font-sans font-bold text-ink-900"
              style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 0.98, letterSpacing: "-0.04em" }}
            >
              {titleLead} <br className="hidden md:block" />
              <span className="font-serif italic font-light text-amber-600">{titleAccent}</span>
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.55] text-ink-800/80">
              {body}
            </p>
          </div>
          <div className="flex md:justify-end">
            <LinkButton href="/contacto" variant="primary" size="lg">
              {ctaLabel}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
