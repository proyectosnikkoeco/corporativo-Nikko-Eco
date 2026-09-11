import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { H2, P } from "@/components/ui/Prose";
import { CookiePreferencesButton } from "@/components/consent/CookiePreferencesButton";
import { legalEntity } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Información sobre el uso de cookies en el sitio web de Proyectos Vialcar.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Política de cookies" updated="Septiembre 2026">
      <H2>1. Qué son las cookies</H2>
      <P>
        Una cookie es un pequeño fichero que se descarga en tu dispositivo al acceder a
        determinadas páginas web, y permite almacenar y recuperar información sobre la
        navegación. Esta política cubre también otras tecnologías equivalentes, como el
        almacenamiento local del navegador.
      </P>

      <H2>2. Cookies necesarias</H2>
      <P>
        Son imprescindibles para que el sitio funcione y están exentas de consentimiento
        (art. 22.2 LSSI). Incluyen el almacenamiento local donde guardamos tu decisión
        sobre esta misma política, para no volver a preguntarte en cada visita.
      </P>

      <H2>3. Medición de rendimiento sin cookies</H2>
      <P>
        Usamos Vercel Analytics y Vercel Speed Insights para medir visitas y velocidad de
        carga. No instalan cookies ni recogen datos que permitan identificarte: la
        información es agregada y anónima, por lo que no requiere consentimiento previo.
      </P>

      <H2>4. Cookies de analítica y publicidad</H2>
      <P>
        Solo se activan si nos das permiso expreso, y puedes retirarlo en cualquier
        momento. Mientras no las aceptes, el sitio no realiza ninguna petición a estos
        terceros:
      </P>
      <ul className="ml-5 list-disc space-y-1">
        <li>
          <strong>Analítica</strong> — Google Analytics 4 (Google Ireland Ltd.). Mide qué
          páginas se visitan y desde dónde. Datos agregados.
        </li>
        <li>
          <strong>Publicidad</strong> — Meta Pixel (Meta Platforms Ireland Ltd.). Mide la
          eficacia de nuestros anuncios y permite volver a mostrártelos fuera de esta web.
        </li>
      </ul>

      <H2>5. Cómo gestionar tus preferencias</H2>
      <P>
        Puedes revisar o cambiar tu decisión cuando quieras desde el siguiente botón, o
        desde el enlace &laquo;Preferencias de cookies&raquo; del pie de página. Retirar
        el consentimiento es tan sencillo como darlo.
      </P>
      <p>
        <CookiePreferencesButton className="rounded-xs border border-ink-200 px-5 py-3 text-[14px] font-semibold text-ink-800 transition-colors hover:border-ink-400" />
      </p>
      <P>
        También puedes bloquear o eliminar cookies desde la configuración de tu navegador.
        Ten en cuenta que desactivar las cookies necesarias puede afectar al
        funcionamiento del sitio.
      </P>

      <H2>6. Más información</H2>
      <P>
        Para cualquier duda sobre esta política puedes escribirnos a {legalEntity.email}.
      </P>
    </LegalLayout>
  );
}
