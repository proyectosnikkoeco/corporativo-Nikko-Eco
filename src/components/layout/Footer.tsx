import Link from "next/link";
import { brand } from "@/lib/brand";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-line bg-brand-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-brand-secondary">
            {brand.name}
          </p>
          <p className="mt-2 max-w-xs text-sm text-brand-muted">
            {brand.claim}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-secondary">
            Navegación
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/sobre-nosotros"
                className="text-brand-ink/80 hover:text-brand"
              >
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                className="text-brand-ink/80 hover:text-brand"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="text-brand-ink/80 hover:text-brand"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-secondary">
            Contacto
          </p>
          <ul className="mt-3 space-y-2 text-sm text-brand-ink/80">
            <li>
              <a href={`mailto:${brand.contact.email}`} className="hover:text-brand">
                {brand.contact.email}
              </a>
            </li>
            <li>{brand.contact.phone}</li>
            <li>{brand.contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-brand-muted md:flex-row">
          <p>© {year} {brand.name}. Todos los derechos reservados.</p>
          <p>Aviso legal · Política de privacidad · Cookies</p>
        </div>
      </div>
    </footer>
  );
}
