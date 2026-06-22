import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Principles } from "@/components/sections/Principles";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Nikko Eco — grupo de servicio inmobiliario integral. Cuidamos del lugar donde se vive, donde se trabaja y donde se invierte.",
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

      <Principles />
      <CTA />
    </>
  );
}
