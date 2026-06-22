import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/brand";

const nav = [
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-line bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label={`${brand.name} — Inicio`}
          className="flex items-center gap-2 text-brand"
        >
          <Image
            src="/brand/logo.svg"
            alt={brand.name}
            width={140}
            height={28}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-ink/80 transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-contrast transition-opacity hover:opacity-90 md:inline-flex"
        >
          Pide presupuesto
        </Link>
      </div>
    </header>
  );
}
