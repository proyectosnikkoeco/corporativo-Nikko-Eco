const services = [
  {
    title: "Gestión de residuos",
    description:
      "Recogida, trazabilidad y valorización de residuos industriales y peligrosos con cumplimiento normativo completo.",
  },
  {
    title: "Eficiencia energética",
    description:
      "Auditorías, monitorización y proyectos de mejora para reducir el consumo y la huella de carbono.",
  },
  {
    title: "Consultoría ambiental",
    description:
      "Acompañamiento en licencias, ISO 14001, planes de descarbonización y reporting de sostenibilidad.",
  },
  {
    title: "Obra y rehabilitación sostenible",
    description:
      "Soluciones de bajo impacto para reformas, aislamientos y materiales reciclados o reciclables.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Qué hacemos
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-brand-secondary md:text-4xl">
          Servicios diseñados para empresas que quieren avanzar con criterio
          ambiental.
        </h2>
      </div>

      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <li
            key={service.title}
            className="rounded-2xl border border-brand-line bg-white p-6 transition-shadow hover:shadow-md"
          >
            <h3 className="font-display text-xl font-semibold text-brand-secondary">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-brand-muted">{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
