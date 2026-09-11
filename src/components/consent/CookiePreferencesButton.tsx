"use client";

import { OPEN_PREFERENCES_EVENT } from "@/components/consent/ConsentManager";

/**
 * Reabre el panel de cookies. Obligatorio poder retirar el consentimiento
 * con la misma facilidad con que se dio (art. 7.3 RGPD).
 */
export function CookiePreferencesButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))}
      className={className}
    >
      Preferencias de cookies
    </button>
  );
}
