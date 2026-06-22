/**
 * Configuración única de marca.
 * Cuando lleguen los recursos definitivos de Claude Design, actualizar aquí
 * y los colores/tipografías en `src/app/globals.css`.
 */
export const brand = {
  name: "Nikko Eco",
  shortName: "Nikko Eco",
  claim: "Soluciones sostenibles para un futuro más limpio",
  description:
    "En Nikko Eco diseñamos e implantamos soluciones medioambientales para empresas e instituciones: gestión de residuos, eficiencia energética y consultoría ambiental.",
  url: "https://nikkoeco.com",
  contact: {
    email: "info@nikkoeco.com",
    phone: "+34 000 000 000",
    address: "España",
  },
  social: {
    linkedin: "",
    instagram: "",
  },
} as const;

export type Brand = typeof brand;
