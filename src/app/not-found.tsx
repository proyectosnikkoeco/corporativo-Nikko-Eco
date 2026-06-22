import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkButton } from "@/components/ui/Button";

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
        <div className="mt-9 flex justify-center gap-3">
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
        <p className="mt-12 text-[13px] text-bone-300/40">
          <Link href="/servicios" className="hover:text-amber-400">
            Ver servicios
          </Link>
        </p>
      </div>
    </section>
  );
}
