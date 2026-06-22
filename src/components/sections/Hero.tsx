import { LinkButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { brand } from "@/lib/brand";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-800 text-bone-300">
      {/* Halo ámbar decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-32 h-[600px] w-[600px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(240,183,62,0.16), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-28 md:pb-36 md:pt-36">
        <Eyebrow tone="accent">Grupo de servicio inmobiliario</Eyebrow>

        <h1
          className="mt-7 font-sans font-bold text-bone-300"
          style={{
            fontSize: "clamp(48px, 8vw, 92px)",
            lineHeight: 0.95,
            letterSpacing: "-0.055em",
          }}
        >
          <span className="text-bone-300/55">Tus objetivos,</span>
          <br />
          <span className="text-amber-400">nuestra meta.</span>
        </h1>

        <p className="mt-7 max-w-2xl font-serif italic font-light text-[22px] leading-[1.3] tracking-[-0.015em] text-bone-300/75">
          {brand.description}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/contacto" variant="primary" size="lg">
            Pide presupuesto
          </LinkButton>
          <LinkButton
            href="/servicios"
            variant="ghost"
            size="lg"
            className="!text-bone-300 !border-border-inverse hover:!bg-ink-700"
          >
            Ver servicios
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
