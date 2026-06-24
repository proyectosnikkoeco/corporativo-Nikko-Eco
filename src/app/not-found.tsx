import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkButton } from "@/components/ui/Button";
import { subBrands } from "@/lib/brand";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ink-800 text-bone-300">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <div className="flex justify-center">
          <Wordmark size="lg" tone="light" />
        </div>
        <p className="mt-10 flex justify-center">
          <Eyebrow tone="accent">Error 404</Eyebrow>
        </p>
        <h1
          className="mt-6 font-sans font-bold text-bone-300"
          style={{ fontSize: "clamp(40px, 7vw, 72px)", lineHeight: 0.95, letterSpacing: "-0.045em" }}
        >
          Esta página <span className="font-serif italic font-light text-amber-400">no existe.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[17px] leading-[1.6] text-bone-300/70">
          La dirección que buscas no está aquí. Vuelve al inicio o cuéntanos qué necesitas.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <LinkButton href="/" variant="primary" size="lg">
            Volver al inicio
          </LinkButton>
          <LinkButton
            href="/contacto"
            variant="ghost"
            size="lg"
            className="!text-bone-300 !border-border-inverse hover:!bg-ink-700"
          >
            Contacto
          </LinkButton>
        </div>

        <div className="mt-16 border-t border-border-inverse pt-10">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-bone-300/45">
            Quizás buscabas
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm">
            {subBrands.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicios#${s.slug}`}
                  className="text-bone-300/85 hover:text-amber-400"
                >
                  Nikko {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/sobre-nosotros" className="text-bone-300/85 hover:text-amber-400">
                Sobre nosotros
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
