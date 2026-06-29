import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-800 text-bone-300">
      {/* Foto de fondo a pantalla completa */}
      <Image
        src="/images/hero.jpg"
        alt="Vivienda moderna al atardecer"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Degradado de tinta: oscurece la izquierda para que el texto se lea */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,14,26,0.92) 0%, rgba(10,14,26,0.78) 38%, rgba(10,14,26,0.35) 70%, rgba(10,14,26,0.15) 100%)",
        }}
      />
      {/* Refuerzo inferior para los botones */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background: "linear-gradient(0deg, rgba(10,14,26,0.55), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-28 pt-28 md:pb-36 md:pt-36">
        <Eyebrow tone="accent">Grupo de servicio inmobiliario</Eyebrow>

        <h1
          className="mt-6 font-sans font-bold text-bone-300"
          style={{
            fontSize: "clamp(48px, 8vw, 92px)",
            lineHeight: 0.95,
            letterSpacing: "-0.055em",
          }}
        >
          <span className="text-bone-300/60">Tus objetivos,</span>
          <br />
          <span className="text-amber-400">nuestra meta.</span>
        </h1>

        <p className="mt-7 max-w-xl font-serif italic font-light text-[22px] leading-[1.3] tracking-[-0.015em] text-bone-300/85">
          Cuidamos del lugar donde se vive, donde se trabaja y donde se invierte.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/contacto" variant="primary" size="lg" prefetch>
            Pide presupuesto
          </LinkButton>
          <LinkButton
            href="/servicios"
            variant="ghost"
            size="lg"
            prefetch
            className="!text-bone-300 !border-bone-300/30 hover:!bg-bone-300/10"
          >
            Ver servicios
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
