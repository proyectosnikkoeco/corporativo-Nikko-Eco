"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CONSENT_ALL,
  CONSENT_NONE,
  readConsent,
  writeConsent,
  type ConsentState,
} from "@/lib/consent";
import { useConsent } from "@/components/consent/useConsent";

export const OPEN_PREFERENCES_EVENT = "vialcar:open-cookie-preferences";

type PurposeKey = keyof ConsentState;

const PURPOSES: { key: PurposeKey; title: string; body: string }[] = [
  {
    key: "analytics",
    title: "Analítica",
    body: "Nos dice qué páginas se visitan y desde dónde, para saber qué mejorar. Datos agregados, nunca vinculados a tu identidad.",
  },
  {
    key: "marketing",
    title: "Publicidad",
    body: "Permite medir si nuestros anuncios funcionan y volver a mostrártelos fuera de esta web.",
  },
];

export function ConsentManager() {
  const consent = useConsent();
  const [reopened, setReopened] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [draft, setDraft] = useState<ConsentState>(CONSENT_NONE);

  // Permite reabrir el panel desde el pie de página o la política de cookies.
  // Sembramos el borrador aquí, al abrir, en vez de sincronizarlo con un
  // efecto: así el estado solo cambia como respuesta a una acción.
  useEffect(() => {
    const open = () => {
      setDraft(readConsent() ?? CONSENT_NONE);
      setReopened(true);
      setPanelOpen(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, open);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, open);
  }, []);

  // `undefined` = aún no hemos leído localStorage. No pintamos nada para no
  // romper la hidratación ni parpadear el banner a quien ya decidió.
  if (consent === undefined) return null;

  const visible = consent === null || reopened;
  if (!visible) return null;

  const decide = (state: ConsentState) => {
    writeConsent(state);
    setReopened(false);
    setPanelOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Preferencias de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border-inverse bg-ink-900 text-bone-300"
    >
      <div className="mx-auto max-h-[85vh] max-w-6xl overflow-y-auto px-6 py-6 md:py-7">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-bone-300/50">
          Cookies
        </p>

        <div className="mt-4 gap-10 md:flex md:items-start md:justify-between">
          <p className="max-w-2xl text-[14px] leading-[1.6] text-bone-300/85">
            Usamos cookies propias necesarias para que la web funcione. Con tu
            permiso usaríamos también cookies de analítica y publicidad. Puedes
            aceptarlas, rechazarlas todas o elegir una a una — y cambiar de
            opinión cuando quieras.{" "}
            <Link
              href="/cookies"
              className="underline underline-offset-[3px] transition-colors hover:text-amber-400"
            >
              Política de cookies
            </Link>
            .
          </p>

          <div className="mt-6 flex shrink-0 flex-col gap-3 sm:flex-row md:mt-0">
            <button
              type="button"
              onClick={() => decide(CONSENT_NONE)}
              className="rounded-xs border border-bone-300/35 px-6 py-3 text-sm font-semibold tracking-[-0.01em] text-bone-300 transition-colors hover:bg-bone-300/10"
            >
              Rechazar
            </button>
            <button
              type="button"
              onClick={() => decide(CONSENT_ALL)}
              className="rounded-xs border border-amber-400 bg-amber-400 px-6 py-3 text-sm font-semibold tracking-[-0.01em] text-ink-900 transition-colors hover:border-amber-500 hover:bg-amber-500"
            >
              Aceptar
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            if (!panelOpen) setDraft(readConsent() ?? CONSENT_NONE);
            setPanelOpen(!panelOpen);
          }}
          aria-expanded={panelOpen}
          className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-bone-300/60 underline underline-offset-[4px] transition-colors hover:text-amber-400"
        >
          {panelOpen ? "Ocultar opciones" : "Personalizar"}
        </button>

        {panelOpen && (
          <div className="mt-6 border-t border-border-inverse pt-2">
            <div className="flex items-start justify-between gap-6 border-b border-border-inverse py-4">
              <span>
                <span className="block font-sans text-[15px] font-semibold text-bone-300">
                  Necesarias
                </span>
                <span className="mt-1 block max-w-xl text-[13px] leading-[1.5] text-bone-300/60">
                  Imprescindibles para navegar y para recordar esta misma
                  decisión. No se pueden desactivar.
                </span>
              </span>
              <span className="mt-1 shrink-0 font-mono text-[10.5px] uppercase tracking-[0.22em] text-bone-300/40">
                Siempre activas
              </span>
            </div>

            {PURPOSES.map((p) => {
              const on = draft[p.key];
              return (
                <label
                  key={p.key}
                  className="flex cursor-pointer items-start justify-between gap-6 border-b border-border-inverse py-4"
                >
                  <span>
                    <span className="block font-sans text-[15px] font-semibold text-bone-300">
                      {p.title}
                    </span>
                    <span className="mt-1 block max-w-xl text-[13px] leading-[1.5] text-bone-300/60">
                      {p.body}
                    </span>
                  </span>
                  <span className="relative mt-1 flex shrink-0">
                    <input
                      type="checkbox"
                      aria-label={p.title}
                      className="peer sr-only"
                      checked={on}
                      onChange={(e) =>
                        setDraft((d) => ({ ...d, [p.key]: e.target.checked }))
                      }
                    />
                    <span
                      className={`flex h-5 w-9 items-center rounded-full transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-amber-500 ${
                        on ? "bg-amber-400" : "bg-bone-300/25"
                      }`}
                    >
                      <span
                        className={`block h-4 w-4 rounded-full bg-ink-900 transition-transform ${
                          on ? "translate-x-[18px]" : "translate-x-[2px]"
                        }`}
                      />
                    </span>
                  </span>
                </label>
              );
            })}

            <div className="mt-5">
              <button
                type="button"
                onClick={() => decide(draft)}
                className="rounded-xs border border-bone-300/35 px-6 py-3 text-sm font-semibold tracking-[-0.01em] text-bone-300 transition-colors hover:bg-bone-300/10"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
