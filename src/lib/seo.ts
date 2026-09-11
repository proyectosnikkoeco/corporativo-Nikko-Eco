import { brand, subBrands, type SubBrand } from "@/lib/brand";
import { legalEntity } from "@/lib/legal";

/**
 * Serializa un objeto JSON-LD escapando "<" para que no pueda cerrar el
 * <script> ni inyectar markup. Recomendación oficial de Next:
 * node_modules/next/dist/docs/01-app/02-guides/json-ld.md
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const abs = (path: string) => new URL(path, brand.url).toString();

/**
 * Ficha de empresa. Se emite una sola vez, en el layout raíz.
 *
 * Solo se declara `addressCountry` — el resto del domicilio postal queda
 * fuera hasta que la SL esté constituida y tengamos los datos reales.
 * Declarar una dirección inventada perjudica el SEO local.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": abs("/#organization"),
    name: brand.name,
    legalName: legalEntity.razonSocial,
    url: brand.url,
    email: brand.contact.email,
    slogan: brand.claim,
    description: brand.description,
    image: abs("/opengraph-image"),
    logo: abs("/icon"),
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
    },
    areaServed: { "@type": "Country", name: "España" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Especialidades",
      itemListElement: subBrands.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${brand.shortName} ${s.name}`,
          url: abs(`/servicios/${s.slug}`),
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": abs("/#website"),
    name: brand.name,
    url: brand.url,
    inLanguage: "es-ES",
    publisher: { "@id": abs("/#organization") },
  };
}

export function serviceSchema(sub: SubBrand) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${brand.shortName} ${sub.name}`,
    serviceType: sub.name,
    description: sub.summary,
    url: abs(`/servicios/${sub.slug}`),
    image: abs(sub.image),
    provider: { "@id": abs("/#organization") },
    areaServed: { "@type": "Country", name: "España" },
    audience: { "@type": "Audience", audienceType: sub.audience },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((step, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: step.name,
      item: abs(step.path),
    })),
  };
}
