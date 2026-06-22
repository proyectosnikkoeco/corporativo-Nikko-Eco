import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { Isotype } from "@/components/brand/Isotype";
import { LinkButton } from "@/components/ui/Button";
import { brand } from "@/lib/brand";

const nav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-soft bg-bone-300/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label={`${brand.name} — Inicio`}
          className="flex items-center"
        >
          <Wordmark size="md" tone="dark" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-[-0.01em] text-ink-800 transition-colors hover:text-amber-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LinkButton href="/contacto" variant="primary" size="sm" className="hidden md:inline-flex">
            Pide presupuesto
          </LinkButton>
          <Isotype size={32} tone="dark" />
        </div>
      </div>
    </header>
  );
}
