"use client";

import Script from "next/script";
import { useConsent } from "@/components/consent/useConsent";

/**
 * Scripts de terceros (GA4 + Meta Pixel), condicionados al consentimiento.
 *
 * Nada se carga si falta la variable de entorno, así que por defecto la web
 * no hace ninguna petición a terceros.
 *
 * Cuando sí hay ID configurado, el script se monta únicamente después de
 * que el usuario haya aceptado esa finalidad concreta. Es más restrictivo
 * que el patrón de Google (cargar siempre con Consent Mode en `denied`),
 * pero deja fuera cualquier zona gris: si no hay consentimiento, no hay
 * petición. Pierdes el modelado de conversiones de Google, que a esta
 * escala no aporta nada.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function ThirdPartyScripts() {
  const consent = useConsent();

  const analytics = consent?.analytics === true;
  const marketing = consent?.marketing === true;

  return (
    <>
      {GA_ID && analytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: '${marketing ? "granted" : "denied"}',
                ad_user_data: '${marketing ? "granted" : "denied"}',
                ad_personalization: '${marketing ? "granted" : "denied"}',
                analytics_storage: 'granted'
              });
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {META_PIXEL_ID && marketing && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
