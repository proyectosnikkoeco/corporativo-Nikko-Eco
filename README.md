# Nikko Eco — Web corporativa

Sitio corporativo de **Nikko Eco**, grupo de servicio inmobiliario integral con cuatro
especialidades: Seguros, Hogar, Obras y Capital.

> **Tus objetivos, nuestra meta.**

## Estado

- [x] **Web corporativa** — Home, Servicios, Sobre nosotros, Contacto
- [x] **Design System integrado** — tokens, Wordmark, SubMark, componentes UI
- [ ] Landings de campaña (estructura preparada en `src/app/(landings)/`)
- [ ] Plantillas de email (carpeta `emails/`)
- [ ] Módulo de solicitud y generación de presupuestos

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS 4](https://tailwindcss.com/) con tokens del DS
- [`next/font`](https://nextjs.org/docs/app/api-reference/components/font) — Geist + Geist Mono + Fraunces
- pnpm

## Puesta en marcha

```bash
pnpm install
cp .env.example .env.local   # y rellenar con credenciales reales
pnpm dev          # http://localhost:3000
pnpm build        # build de producción
pnpm typecheck
pnpm lint
```

## Envío del formulario de contacto (SMTP)

El formulario de `/contacto` se envía por SMTP usando `nodemailer`. Las credenciales
viven en `.env.local` (ignorado por git). Copia `.env.example` y rellena:

```env
SMTP_HOST=smtp.ionos.es        # IONOS (España)
SMTP_PORT=587                  # 587 STARTTLS · 465 SSL
SMTP_USER=info@nikkoeco.com    # buzón emisor (usuario = email completo)
SMTP_PASS=...                  # contraseña del buzón
MAIL_TO=ventas@nikkoeco.com    # destinatario de las solicitudes
MAIL_FROM_NAME=Web Nikko Eco
```

El email se envía con:

- `From`: `MAIL_FROM_NAME <SMTP_USER>`
- `To`: `MAIL_TO`
- `Reply-To`: el visitante — al pulsar "Responder" desde tu buzón se contesta
  directamente al cliente.
- Cuerpo: texto plano + HTML con el branding de Nikko Eco.

Si las variables faltan o el envío falla, el formulario muestra al usuario un error
("no hemos podido enviar tu mensaje, inténtalo de nuevo o llámanos") y se registra
en los logs del servidor. La solicitud nunca se pierde silenciosamente.

## Estructura

```
design-system/           ← Design System oficial (entrega Claude Design, raw)
├── tokens/              ← variables CSS de colores, tipografía, espaciado…
├── components/          ← Wordmark, SubMark, Button, Card… (referencia)
├── templates/           ← deck, presupuesto, firma email, business card, social
├── readme.md            ← guía de marca completa
└── Nikko-Eco-Manual-de-marca.html

src/
├── app/
│   ├── (marketing)/     ← Páginas corporativas
│   ├── (landings)/      ← Landings de campaña (preparado)
│   ├── layout.tsx       ← Root layout (fuentes oficiales, metadata)
│   ├── page.tsx         ← Home
│   └── globals.css      ← Importa tokens desde design-system/
├── components/
│   ├── brand/           ← Wordmark, SubMark (TSX)
│   ├── layout/          ← Header, Footer
│   ├── sections/        ← Hero, SubBrandsGrid, Principles, CTA
│   └── ui/              ← Button, Eyebrow
└── lib/
    └── brand.ts         ← Nombre, claim, contacto, sub-marcas, principios

public/brand/            ← Isotipos light / dark / mono (SVG)
emails/                  ← Plantillas de email (próximamente)
```

## Reglas no negociables de la marca

Source: `design-system/SKILL.md`

1. **Claim principal**: *"Tus objetivos, nuestra meta."* — voz corporativa.
   **Claim secundario**: *"Tus metas, nuestro oficio."* — voz del taller (Hogar / Obras).
2. **Wordmark**: "Nikko" en Geist bold + "Eco." en italic Fraunces ámbar. Nunca en
   dos líneas. El punto final siempre se mantiene.
3. **Sub-marcas**: solo "Nikko Seguros / Hogar / Obras / Capital". "Eco" aparece
   **únicamente** en la marca paraguas.
4. **Paleta**: Tinta + Hueso + Ámbar. Un único acento cálido. No inventes colores.
5. **Tipografía**: Geist (sans) + Fraunces (serif, *siempre en italic*) + Geist Mono.
   Tracking negativo agresivo en display (-0.055em). Un titular = una sola familia.
6. **Esquinas casi rectas**. Pills sólo para badges.
7. **Voz**: directa, sin adornos, premium sin postureo. Nada de "lo antes posible".
