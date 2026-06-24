import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { H2, P } from "@/components/ui/Prose";
import { legalEntity } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Información legal de Nikko Eco conforme a la LSSI-CE.",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Aviso legal" updated="Junio 2026">
      <H2>1. Datos identificativos</H2>
      <P>
        En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de
        la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del
        titular de este sitio web:
      </P>
      <ul className="ml-5 list-disc space-y-1">
        <li><strong>Titular:</strong> {legalEntity.razonSocial}</li>
        <li><strong>CIF:</strong> {legalEntity.cif}</li>
        <li><strong>Domicilio:</strong> {legalEntity.domicilio}</li>
        <li><strong>Email:</strong> {legalEntity.email}</li>
        <li><strong>Datos registrales:</strong> {legalEntity.registro}</li>
      </ul>

      <H2>2. Objeto</H2>
      <P>
        El presente aviso legal regula el uso del sitio web {legalEntity.dominio}, del que
        es titular {legalEntity.razonSocial}. La navegación por el sitio atribuye la
        condición de usuario e implica la aceptación plena de estas condiciones.
      </P>

      <H2>3. Condiciones de uso</H2>
      <P>
        El usuario se compromete a hacer un uso adecuado de los contenidos y servicios y a
        no emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe y al
        ordenamiento legal.
      </P>

      <H2>4. Propiedad intelectual e industrial</H2>
      <P>
        Todos los contenidos del sitio (textos, fotografías, gráficos, logotipos, iconos,
        software y diseño) son propiedad de {legalEntity.razonSocial} o de terceros que han
        autorizado su uso. Quedan reservados todos los derechos.
      </P>

      <H2>5. Exclusión de responsabilidad</H2>
      <P>
        {legalEntity.razonSocial} no se hace responsable de los daños derivados del mal uso
        del sitio ni de las interrupciones, virus o desconexiones del sistema ajenas a su
        control.
      </P>

      <H2>6. Legislación aplicable</H2>
      <P>
        Las presentes condiciones se rigen por la legislación española. Para cualquier
        controversia, las partes se someten a los juzgados y tribunales que correspondan
        conforme a derecho.
      </P>
    </LegalLayout>
  );
}
