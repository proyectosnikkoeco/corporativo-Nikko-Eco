/**
 * Estado de consentimiento de cookies (RGPD / LOPDGDD).
 *
 * Las cookies técnicas no se listan: son necesarias para que la web
 * funcione y están exentas de consentimiento (art. 22.2 LSSI).
 */
export type ConsentState = {
  analytics: boolean;
  marketing: boolean;
};

export const CONSENT_STORAGE_KEY = "vialcar-consent";
export const CONSENT_EVENT = "vialcar:consent-change";

export const CONSENT_ALL: ConsentState = { analytics: true, marketing: true };
export const CONSENT_NONE: ConsentState = { analytics: false, marketing: false };

/**
 * Lee la decisión guardada.
 *
 * Devuelve `null` si el usuario todavía no ha decidido — ese es el caso en
 * el que hay que enseñar el banner. Si el navegador bloquea localStorage
 * (modo privado, cookies de terceros desactivadas) tratamos la situación
 * como "sin decidir": es el lado seguro, no se activa nada.
 */
export function readConsent(): ConsentState | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    return {
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
    };
  } catch {
    return null;
  }
}

export function writeConsent(state: ConsentState): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Si no podemos persistir, la decisión vale solo para esta sesión.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
}
