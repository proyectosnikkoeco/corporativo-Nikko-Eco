import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { clients } from "@/lib/brand";

/**
 * Franja de logos de clientes. No renderiza nada mientras `clients` esté
 * vacío — ver la nota en lib/brand.ts.
 */
export function Clients() {
  if (clients.length === 0) return null;

  return (
    <section className="border-y border-border-soft bg-bone-200">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Eyebrow>Confían en nosotros</Eyebrow>
        <ul className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-8">
          {clients.map((c) => (
            <li key={c.name} className="relative h-8 w-28 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0">
              <Image
                src={c.logo}
                alt={c.name}
                fill
                sizes="112px"
                className="object-contain object-left"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
