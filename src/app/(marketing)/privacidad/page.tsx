import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { H2, P } from "@/components/ui/Prose";
import { legalEntity } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo trata Nikko Eco tus datos personales conforme al RGPD y la LOPDGDD.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Política de privacidad" updated="Junio 2026">
      <H2>1. Responsable del tratamiento</H2>
      <P>
        {legalEntity.razonSocial} (CIF {legalEntity.cif}), con domicilio en{" "}
        {legalEntity.domicilio} y correo de contacto {legalEntity.email}, es responsable
        del tratamiento de los datos personales que nos facilites.
      </P>

      <H2>2. Datos que tratamos y finalidad</H2>
      <P>
        A través del formulario de contacto tratamos los datos que nos proporcionas
        (nombre, email, teléfono y la descripción de tu solicitud) con la finalidad de
        atender tu petición, elaborar el presupuesto solicitado y mantener el contacto
        comercial derivado.
      </P>

      <H2>3. Legitimación</H2>
      <P>
        La base legal es tu consentimiento al enviar el formulario y, en su caso, la
        aplicación de medidas precontractuales a petición tuya (art. 6.1.a y 6.1.b RGPD).
      </P>

      <H2>4. Conservación</H2>
      <P>
        Conservamos tus datos durante el tiempo necesario para atender tu solicitud y,
        posteriormente, durante los plazos legalmente exigibles. Después se suprimen.
      </P>

      <H2>5. Destinatarios</H2>
      <P>
        No cedemos tus datos a terceros salvo obligación legal. Los proveedores
        tecnológicos que dan soporte al sitio actúan como encargados del tratamiento bajo
        contrato.
      </P>

      <H2>6. Tus derechos</H2>
      <P>
        Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición,
        limitación y portabilidad escribiendo a {legalEntity.email}. También puedes
        reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).
      </P>
    </LegalLayout>
  );
}
