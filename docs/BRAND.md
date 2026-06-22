# Guía de aplicación de la identidad de marca

La identidad visual de Nikko Eco se está creando con **Claude Design**.
Este documento explica **dónde** se enchufa cada pieza cuando lleguen los
assets definitivos.

> Todo está centralizado para que aplicar la marca completa sea cuestión
> de tocar **3 ficheros** y la carpeta `public/brand/`.

---

## 1. Logos e iconografía

📁 `public/brand/`

Sustituir / añadir los archivos:

| Archivo               | Uso                                                        |
| --------------------- | ---------------------------------------------------------- |
| `logo.svg`            | Logo principal (color sobre fondo claro) — usado en header |
| `logo-blanco.svg`     | Logo invertido para fondos oscuros (footer secundario)     |
| `isotipo.svg`         | Símbolo aislado — favicon, redes sociales, OG image        |
| `favicon.ico`         | Reemplazar el actual en `src/app/favicon.ico`              |
| `og-image.png`        | 1200×630, para Open Graph / redes sociales                 |

Formatos recomendados: **SVG** para logos, **PNG** para OG y assets
rasterizados. Mantener `viewBox` limpio y `currentColor` cuando se
quiera teñir desde CSS.

---

## 2. Paleta de colores

📁 `src/app/globals.css`

Editar el bloque `:root` con los HEX definitivos:

```css
:root {
  --brand-primary: #2f7d4f;            /* Color principal */
  --brand-primary-contrast: #ffffff;   /* Texto sobre primary */
  --brand-secondary: #1a3b2e;          /* Color secundario (titulares, footer) */
  --brand-accent: #c9e265;             /* Acento / highlight */

  --brand-ink: #0f1a14;                /* Texto principal */
  --brand-muted: #5b6b62;              /* Texto secundario */
  --brand-soft: #f4f7f2;               /* Fondo sutil */
  --brand-line: #e3e9e3;               /* Bordes y separadores */
}
```

Cada token está expuesto como utilidad de Tailwind:

- `bg-brand`, `text-brand`, `border-brand`
- `bg-brand-secondary`, `text-brand-secondary`
- `bg-brand-accent`, `text-brand-accent`
- `bg-brand-soft`, `border-brand-line`, `text-brand-muted`

---

## 3. Tipografías

📁 `src/app/layout.tsx`

Reemplazar los imports de `next/font` con las fuentes definitivas:

```ts
import { TuFuenteSans, TuFuenteDisplay } from "next/font/google";

const sans = TuFuenteSans({
  variable: "--font-brand-sans",
  subsets: ["latin"],
});

const display = TuFuenteDisplay({
  variable: "--font-brand-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});
```

Si la fuente es **custom (no de Google Fonts)**, usar
[`next/font/local`](https://nextjs.org/docs/app/api-reference/components/font#local-fonts)
apuntando a `public/brand/fonts/`.

Las variables CSS son consumidas automáticamente como `font-sans` y
`font-display` en Tailwind.

---

## 4. Datos corporativos (nombre, claim, contacto)

📁 `src/lib/brand.ts`

Editar el objeto `brand` con los datos definitivos: nombre legal, claim,
descripción, email, teléfono, dirección y redes sociales.

Este objeto se consume en:

- `<title>` y metadatos OG (`layout.tsx`)
- Header, Footer
- Página de contacto

---

## 5. Checklist al recibir los assets de Claude Design

- [ ] Reemplazar `public/brand/logo.svg` y `logo-blanco.svg`
- [ ] Sustituir `src/app/favicon.ico`
- [ ] Añadir `public/brand/og-image.png` (1200×630)
- [ ] Actualizar HEX de la paleta en `globals.css`
- [ ] Cambiar tipografías en `layout.tsx`
- [ ] Revisar `brand.ts` con los datos legales/contacto reales
- [ ] Probar visualmente: `pnpm dev` → recorrer Home / Servicios / Sobre nosotros / Contacto
