import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacta con ${brand.name} para pedir presupuesto o más información.`,
};

const labelClass =
  "font-mono text-[10.5px] uppercase tracking-[0.22em] font-semibold text-ink-400";
const inputClass =
  "mt-2 block w-full rounded-xs border border-ink-200 bg-bone-100 px-4 py-3 text-[14px] text-ink-900 outline-none transition-colors focus:border-amber-500";

export default function ContactoPage() {
  return (
    <section className="bg-bone-300">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Contacto</Eyebrow>
            <h1
              className="mt-6 font-sans font-bold text-ink-900"
              style={{
                fontSize: "clamp(42px, 6vw, 72px)",
                lineHeight: 0.95,
                letterSpacing: "-0.045em",
              }}
            >
              Cuéntanos qué <br />
              <span className="font-serif italic font-light text-amber-600">necesitas.</span>
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-[1.6] text-ink-800/85">
              Un técnico nuestro te llama hoy. Sin letra pequeña, sin promesas vacías.
            </p>

            <dl className="mt-12 space-y-6">
              <div>
                <dt className={labelClass}>Información general</dt>
                <dd className="mt-1 text-[15px]">
                  <a href={`mailto:${brand.contact.email}`} className="text-amber-600 hover:underline">
                    {brand.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={labelClass}>Ventas / presupuestos</dt>
                <dd className="mt-1 text-[15px]">
                  <a href={`mailto:${brand.contact.sales}`} className="text-amber-600 hover:underline">
                    {brand.contact.sales}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={labelClass}>Proyectos</dt>
                <dd className="mt-1 text-[15px]">
                  <a href={`mailto:${brand.contact.projects}`} className="text-amber-600 hover:underline">
                    {brand.contact.projects}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={labelClass}>Teléfono</dt>
                <dd className="mt-1 text-[15px] text-ink-900">{brand.contact.phone}</dd>
              </div>
            </dl>
          </div>

          <form
            className="bg-bone-200 p-8 md:p-10 border-l-2 border-amber-400"
            aria-label="Formulario de contacto"
          >
            <p className={labelClass}>Pídenos presupuesto</p>
            <div className="mt-6 space-y-5">
              <label className="block">
                <span className={labelClass}>Nombre</span>
                <input name="name" required className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>Email</span>
                <input name="email" type="email" required className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>Teléfono</span>
                <input name="phone" className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>Especialidad</span>
                <select name="service" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Elige…
                  </option>
                  <option value="seguros">Nikko Seguros</option>
                  <option value="hogar">Nikko Hogar</option>
                  <option value="obras">Nikko Obras</option>
                  <option value="capital">Nikko Capital</option>
                </select>
              </label>
              <label className="block">
                <span className={labelClass}>Cuéntanos tu proyecto</span>
                <textarea name="message" rows={5} required className={inputClass} />
              </label>
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Enviar
              </Button>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-400">
                Te llamamos hoy
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
