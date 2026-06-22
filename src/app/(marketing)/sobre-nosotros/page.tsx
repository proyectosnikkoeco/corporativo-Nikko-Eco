import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce al equipo de Nikko Eco: ingeniería, normativa y compromiso medioambiental.",
};

export default function SobreNosotrosPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Sobre nosotros
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-brand-secondary md:text-5xl">
          Hacemos que la sostenibilidad sea ejecutable.
        </h1>
        <div className="mt-8 space-y-5 text-brand-ink/85">
          <p>
            Nikko Eco nace para acompañar a empresas e instituciones en su
            transición ambiental. Combinamos perfiles de ingeniería, normativa
            y operaciones para entregar proyectos que se ejecutan, no que se
            archivan.
          </p>
          <p>
            Nuestra forma de trabajar se apoya en tres principios:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Datos antes que opiniones.</strong> Medimos antes de
              proponer.
            </li>
            <li>
              <strong>Presupuestos transparentes.</strong> Sin partidas
              opacas ni sorpresas.
            </li>
            <li>
              <strong>Cumplimiento desde el día uno.</strong> Cada
              entregable se diseña para superar las inspecciones.
            </li>
          </ul>
        </div>
      </section>
      <About />
      <CTA />
    </>
  );
}
