/**
 * Configuración única de marca — Nikko Eco
 *
 * Fuente: design-system/readme.md
 * "Grupo de servicio inmobiliario integral con cuatro especialidades:
 *  Seguros, Hogar, Obras y Capital."
 */

export const brand = {
  name: "Nikko Eco",
  shortName: "Nikko",
  claim: "Tus objetivos, nuestra meta.",
  claimSecondary: "Tus metas, nuestro oficio.",
  description:
    "Grupo de servicio inmobiliario integral. Cuidamos del lugar donde se vive, donde se trabaja y donde se invierte.",
  url: "https://nikkoeco.com",
  contact: {
    email: "info@nikkoeco.com",
    address: "España",
  },
  social: {
    linkedin: "",
    instagram: "",
  },
} as const;

/**
 * Sub-marcas. La palabra "Eco" solo aparece en la marca paraguas.
 * Las hijas son siempre "Nikko [Descriptor]".
 */
export const subBrands = [
  {
    slug: "seguros",
    name: "Seguros",
    audience: "B2B compañías aseguradoras",
    summary:
      "Peritaciones, gestión de siniestros y reparaciones para compañías de seguros. Plazos cortos, expedientes cerrados.",
    image: "/images/seguros.jpg",
    imageAlt: "Salón de vivienda restaurada tras siniestro, luz natural",
  },
  {
    slug: "hogar",
    name: "Hogar",
    audience: "Particulares y comunidades",
    summary:
      "Mantenimiento integral, reparaciones urgentes y cuidado del hogar. Técnicos propios, presupuesto cerrado.",
    image: "/images/hogar.jpg",
    imageAlt: "Salón y cocina abierta en vivienda al atardecer",
  },
  {
    slug: "obras",
    name: "Obras",
    audience: "Reformas integrales y subcontrata",
    summary:
      "Reformas integrales, rehabilitación y subcontrata. Plazo, presupuesto y alcance comprometidos.",
    image: "/images/obras.jpg",
    imageAlt: "Cocina reformada con isla y salida al exterior",
  },
  {
    slug: "capital",
    name: "Capital",
    audience: "Inversión inmobiliaria",
    summary:
      "Búsqueda, gestión y valorización de activos inmobiliarios. Acompañamiento end-to-end al inversor.",
    image: "/images/capital.jpg",
    imageAlt: "Promoción residencial con vistas al mar al atardecer",
  },
] as const;

/**
 * Principios de marca. Source: design-system/readme.md
 */
export const principles = [
  { title: "Aparecemos.", body: "Cuando dijimos, donde dijimos." },
  {
    title: "Cumplimos.",
    body: "Plazo, presupuesto y alcance no se mueven sin avisar antes.",
  },
  { title: "Cuidamos.", body: "Cada metro como si fuera nuestro." },
  { title: "Medimos.", body: "Datos, expedientes, fotos, tiempos. Sin opacidad." },
  {
    title: "Hablamos.",
    body: "Sin jerga, sin letra pequeña, sin promesas vacías.",
  },
] as const;

export type Brand = typeof brand;
export type SubBrand = (typeof subBrands)[number];
