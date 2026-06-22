export function About() {
  return (
    <section className="bg-brand-secondary text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Sobre nosotros
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Un equipo técnico que combina ingeniería, normativa y compromiso.
          </h2>
        </div>
        <div className="space-y-4 text-white/85">
          <p>
            Llevamos años ayudando a empresas e instituciones a cumplir con
            sus obligaciones medioambientales y a convertir la sostenibilidad
            en una ventaja real de su operación.
          </p>
          <p>
            Trabajamos con datos, mediciones y resultados verificables. Nada
            de discursos vacíos: proyectos ejecutables, presupuestos claros y
            cumplimiento normativo desde el primer día.
          </p>
        </div>
      </div>
    </section>
  );
}
