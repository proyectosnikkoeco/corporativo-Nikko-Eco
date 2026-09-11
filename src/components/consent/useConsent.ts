"use client";

import { useEffect, useState } from "react";
import { CONSENT_EVENT, readConsent, type ConsentState } from "@/lib/consent";

/**
 * Estado de consentimiento observable desde cualquier componente cliente.
 *
 *   undefined → todavía no hemos leído localStorage (primer render / SSR)
 *   null      → leído, el usuario aún no ha decidido → toca enseñar banner
 *   objeto    → decisión tomada
 *
 * La distinción undefined/null evita desajustes de hidratación: el servidor
 * no puede saber qué hay en localStorage, así que el primer render no pinta
 * nada y la lectura ocurre ya en el cliente.
 */
export function useConsent(): ConsentState | null | undefined {
  const [consent, setConsent] = useState<ConsentState | null | undefined>(
    undefined,
  );

  useEffect(() => {
    const sync = () => setConsent(readConsent());
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  return consent;
}
