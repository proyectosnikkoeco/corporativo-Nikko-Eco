import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de Nikko Eco: gestión de residuos, eficiencia energética, consultoría ambiental y obra sostenible.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Servicios
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-brand-secondary md:text-5xl">
          Todo lo que tu empresa necesita para avanzar en sostenibilidad.
        </h1>
        <p className="mt-6 text-lg text-brand-muted">
          Soluciones ejecutables, medibles y conformes a la normativa
          vigente. Pídenos presupuesto sin compromiso.
        </p>
      </section>
      <Services />
      <CTA />
    </>
  );
}
