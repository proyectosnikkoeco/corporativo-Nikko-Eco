import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SubMark } from "@/components/brand/SubMark";
import { CTA } from "@/components/sections/CTA";
import { Principles } from "@/components/sections/Principles";
import { subBrands } from "@/lib/brand";

type Params = { slug: string };

export function generateStaticParams() {
  return subBrands.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sub = subBrands.find((b) => b.slug === slug);
  if (!sub) return {};
  return {
    title: `Nikko ${sub.name}`,
    description: sub.summary,
    alternates: { canonical: `/servicios/${sub.slug}` },
  };
}

export default async function SubBrandPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const sub = subBrands.find((b) => b.slug === slug);
  if (!sub) notFound();

  return (
    <>
      <nav className="sticky top-20 z-30 border-b border-border-soft bg-bone-300/95 backdrop-blur md:top-[116px]">
        <div className="mx-auto max-w-6xl px-6">
          <ul className="-mx-2 flex gap-1 overflow-x-auto py-3">
            {subBrands.map((b) => {
              const active = b.slug === sub.slug;
              return (
                <li key={b.slug}>
                  <Link
                    href={`/servicios/${b.slug}`}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex whitespace-nowrap px-3 py-2 font-mono text-[10.5px] uppercase tracking-[0.22em] transition-colors ${
                      active
                        ? "text-amber-600"
                        : "text-ink-700 hover:text-amber-600"
                    }`}
                  >
                    Nikko {b.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <section className="bg-bone-300">
        <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-400">
            <Link href="/servicios" className="hover:text-amber-600">
              Servicios
            </Link>{" "}
            <span aria-hidden>/</span> Nikko {sub.name}
          </p>

          <div className="mt-8 grid items-end gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <Eyebrow>{sub.audience}</Eyebrow>
              <h1
                className="mt-5 font-sans font-bold text-ink-900"
                style={{
                  fontSize: "clamp(48px, 7vw, 84px)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.05em",
                }}
              >
                Nikko{" "}
                <span className="font-serif italic font-light text-amber-600">
                  {sub.name}.
                </span>
              </h1>
              <p className="mt-7 max-w-xl font-serif italic font-light text-[22px] leading-[1.3] tracking-[-0.015em] text-ink-800">
                {sub.summary}
              </p>
            </div>
            <div className="md:justify-self-end">
              <SubMark
                brand={sub.name as "Seguros" | "Hogar" | "Obras" | "Capital"}
                size="xl"
                tone="dark"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-6xl px-6 pb-24 md:mt-20">
          <ViewTransition name={`sub-${sub.slug}`}>
            <div className="relative aspect-[16/9] overflow-hidden bg-ink-800">
              <Image
                src={sub.image}
                alt={sub.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
          </ViewTransition>
        </div>
      </section>

      <Principles />

      <CTA
        eyebrow={`Nikko ${sub.name}`}
        titleLead={`Cuéntanos tu proyecto de ${sub.name.toLowerCase()}.`}
        titleAccent="Te llamamos hoy."
        body="Un técnico de la especialidad te llama, escucha el caso y te enviamos un presupuesto cerrado. Sin pelotear entre oficinas."
        ctaLabel="Pedir presupuesto"
      />
    </>
  );
}
