import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { LinkButton } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavLink } from "@/components/layout/NavLink";
import { brand, subBrands } from "@/lib/brand";

const nav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-soft bg-bone-300/90 backdrop-blur">
      <div className="hidden bg-ink-900 text-bone-300/80 md:block">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-6">
          <ul className="flex items-center gap-3">
            {subBrands.map((s, i) => (
              <li key={s.slug} className="flex items-center gap-3">
                <Link
                  href={`/servicios#${s.slug}`}
                  className="font-mono text-[10.5px] uppercase tracking-[0.22em] transition-colors hover:text-amber-400"
                >
                  {s.name}
                </Link>
                {i < subBrands.length - 1 && (
                  <span aria-hidden className="font-mono text-[10.5px] text-bone-300/30">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${brand.contact.email}`}
            className="font-mono text-[10.5px] uppercase tracking-[0.22em] transition-colors hover:text-amber-400"
          >
            {brand.contact.email}
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-8 px-6">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            aria-label={`${brand.name} — Inicio`}
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <Wordmark size="md" tone="dark" />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-[-0.01em] text-ink-800 transition-colors hover:text-amber-600"
                activeClassName="!text-amber-600"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <LinkButton href="/contacto" variant="primary" size="md" className="hidden md:inline-flex">
            Pide presupuesto
          </LinkButton>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
