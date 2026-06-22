import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Plantilla común para páginas legales. Estilo sobrio, una sola columna.
 */
export function LegalLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-bone-300">
      <div className="mx-auto max-w-2xl px-6 py-24 md:py-32">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1
          className="mt-6 font-sans font-bold text-ink-900"
          style={{ fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 0.98, letterSpacing: "-0.04em" }}
        >
          {title}
        </h1>
        <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-400">
          Última actualización · {updated}
        </p>

        <div className="legal-body mt-12 space-y-5 text-[15px] leading-[1.65] text-ink-800/90">
          {children}
        </div>
      </div>
    </section>
  );
}
