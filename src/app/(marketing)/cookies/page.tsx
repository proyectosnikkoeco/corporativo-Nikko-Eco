import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { H2, P } from "@/components/ui/Prose";
import { legalEntity } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Información sobre el uso de cookies en el sitio web de Nikko Eco.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Política de cookies" updated="Junio 2026">
      <H2>1. Qué son las cookies</H2>
      <P>
        Una cookie es un pequeño fichero que se descarga en tu dispositivo al acceder a
        determinadas páginas web, y permite almacenar y recuperar información sobre la
        navegación.
      </P>

      <H2>2. Cookies que utilizamos</H2>
      <P>
        Actualmente este sitio <strong>solo utiliza cookies técnicas</strong> necesarias
        para su funcionamiento. No usamos cookies de analítica ni publicitarias. Si esto
        cambia, actualizaremos esta política y solicitaremos tu consentimiento previo.
      </P>

      <H2>3. Gestión de cookies</H2>
      <P>
        Puedes configurar o desactivar las cookies desde la configuración de tu navegador.
        Ten en cuenta que desactivar las cookies técnicas puede afectar al funcionamiento
        del sitio.
      </P>

      <H2>4. Más información</H2>
      <P>
        Para cualquier duda sobre esta política puedes escribirnos a {legalEntity.email}.
      </P>
    </LegalLayout>
  );
}
