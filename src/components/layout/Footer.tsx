import { Isotype } from "@/components/brand/Isotype";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { NavLink } from "@/components/layout/NavLink";
import Link from "next/link";
import { brand, subBrands } from "@/lib/brand";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-800 text-bone-300">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="-ml-1">
            <Isotype size={72} tone="light" />
          </div>
          <p className="mt-6 max-w-xs font-serif italic font-light text-[18px] leading-snug text-bone-300/70">
            {brand.claim}
          </p>
        </div>

        <div>
          <Eyebrow tone="inverse">Marcas</Eyebrow>
          <ul className="mt-4 space-y-2 text-sm">
            {subBrands.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicios/${s.slug}`}
                  className="text-bone-300/85 hover:text-amber-400 transition-colors"
                >
                  Nikko {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Eyebrow tone="inverse">Navegación</Eyebrow>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <NavLink
                href="/servicios"
                className="text-bone-300/85 transition-colors hover:text-amber-400"
                activeClassName="!text-amber-400"
              >
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/sobre-nosotros"
                className="text-bone-300/85 transition-colors hover:text-amber-400"
                activeClassName="!text-amber-400"
              >
                Sobre nosotros
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/contacto"
                className="text-bone-300/85 transition-colors hover:text-amber-400"
                activeClassName="!text-amber-400"
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <Eyebrow tone="inverse">Contacto</Eyebrow>
          <ul className="mt-4 space-y-2 text-sm text-bone-300/85">
            <li>
              <a href={`mailto:${brand.contact.email}`} className="hover:text-amber-400">
                {brand.contact.email}
              </a>
            </li>
            <li>{brand.contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-inverse">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-[11px] font-mono uppercase tracking-[0.22em] text-bone-300/45 md:flex-row">
          <p>© {year} {brand.name}. Todos los derechos reservados.</p>
          <p className="flex gap-2">
            <Link href="/aviso-legal" className="hover:text-amber-400">Aviso legal</Link>
            <span aria-hidden>·</span>
            <Link href="/privacidad" className="hover:text-amber-400">Privacidad</Link>
            <span aria-hidden>·</span>
            <Link href="/cookies" className="hover:text-amber-400">Cookies</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
