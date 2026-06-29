"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LinkButton } from "@/components/ui/Button";
import { Wordmark } from "@/components/brand/Wordmark";
import { NavLink } from "@/components/layout/NavLink";
import { brand, subBrands } from "@/lib/brand";

const nav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="-mr-2 flex h-10 w-10 items-center justify-center text-ink-900 md:hidden"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
          <path d="M2 6h18M2 11h18M2 16h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" fill="none" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-bone-300 md:hidden">
          <div className="flex h-20 items-center justify-between border-b border-border-soft px-6">
            <Link href="/" aria-label={`${brand.name} — Inicio`} onClick={() => setOpen(false)}>
              <Wordmark size="md" tone="dark" />
            </Link>
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="-mr-2 flex h-10 w-10 items-center justify-center text-ink-900"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" fill="none" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-between overflow-y-auto px-6 py-10">
            <div>
              <ul className="space-y-7">
                {nav.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-sans font-bold text-ink-900 transition-colors hover:text-amber-600"
                      activeClassName="!text-amber-600"
                    >
                      <span
                        style={{ fontSize: "clamp(36px, 9vw, 56px)", letterSpacing: "-0.04em", lineHeight: 1 }}
                      >
                        {item.label}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-border-soft pt-8">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-400">
                  Especialidades
                </p>
                <ul className="mt-4 space-y-3">
                  {subBrands.map((s) => (
                    <li key={s.slug}>
                      <NavLink
                        href={`/servicios/${s.slug}`}
                        onClick={() => setOpen(false)}
                        className="font-sans font-semibold text-ink-800 transition-colors hover:text-amber-600"
                        activeClassName="!text-amber-600"
                      >
                        <span style={{ fontSize: 22, letterSpacing: "-0.02em" }}>
                          Nikko {s.name}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 space-y-6 pt-8">
              <a
                href={`mailto:${brand.contact.email}`}
                className="block font-mono text-[11px] uppercase tracking-[0.22em] text-ink-800 hover:text-amber-600"
                onClick={() => setOpen(false)}
              >
                {brand.contact.email}
              </a>
              <LinkButton
                href="/contacto"
                variant="primary"
                size="lg"
                className="w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Pide presupuesto
              </LinkButton>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
