# Nikko Eco — Web corporativa

Web corporativa de **Nikko Eco** y plataforma base sobre la que se irán construyendo:

1. Web corporativa (Home, Sobre nosotros, Servicios, Contacto). ✅ En curso.
2. Landings de campaña (estructura preparada en `src/app/(landings)/`).
3. Plantillas de email transaccional / comercial (`emails/`).
4. Módulo de **solicitud y generación de presupuestos**.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS 4](https://tailwindcss.com/) con tokens de marca en `globals.css`
- [pnpm](https://pnpm.io/) como gestor de paquetes
- [next/font](https://nextjs.org/docs/app/api-reference/components/font) para la carga de tipografías

## Puesta en marcha

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # build de producción
pnpm typecheck    # comprobación de tipos
pnpm lint         # ESLint
```

## Estructura

```
src/
├── app/
│   ├── (marketing)/        # Páginas corporativas: sobre-nosotros, servicios, contacto
│   ├── (landings)/         # Landings de campaña (estructura preparada)
│   ├── layout.tsx          # Layout raíz (Header + Footer + fuentes + metadata)
│   ├── page.tsx            # Home
│   └── globals.css         # Tokens de marca (colores, fuentes)
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, Services, About, CTA
│   └── ui/                 # Componentes UI reutilizables (vacío por ahora)
└── lib/
    └── brand.ts            # Configuración única de marca (nombre, claim, contacto)
public/
└── brand/                  # Logo, isotipo y assets de identidad
emails/                     # Plantillas de email (próximamente React Email)
docs/
└── BRAND.md                # Cómo aplicar la identidad de Claude Design
```

## Identidad de marca

La identidad visual se está creando con **Claude Design**.
Una vez se reciban los assets definitivos (logo, paleta, tipografías y guía):

1. Sustituir los archivos de `public/brand/`.
2. Actualizar los tokens de color en `src/app/globals.css`.
3. Cambiar las tipografías en `src/app/layout.tsx`.
4. Ajustar el copy global en `src/lib/brand.ts`.

Toda la guía detallada está en [`docs/BRAND.md`](docs/BRAND.md).
