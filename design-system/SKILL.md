---
name: nikko-eco-design
description: Use this skill to generate well-branded interfaces, documents and assets for Nikko Eco — grupo de servicio inmobiliario integral con cuatro especialidades (Seguros, Hogar, Obras, Capital). Includes brand voice, claims, color/type tokens, components and ready-to-copy templates.
user-invocable: true
---

Read the `readme.md` file in this design system root, and explore the other available files. Key files:

- `readme.md` — guía de marca completa: voz, principios, paleta, tipografía, claim
- `styles.css` — entry point CSS (sólo @imports)
- `tokens/` — variables CSS (colors, typography, spacing, radius, shadows, motion)
- `components/brand/` — `Wordmark`, `SubMark`
- `components/core/` — `Button`, `Card`, `Badge`, `Eyebrow`, `Input`
- `templates/deck/` — presentación corporativa 16:9
- `templates/business-card/` — tarjeta de visita doble cara
- `templates/invoice/` — presupuesto / factura A4
- `templates/email-signature/` — firma de correo HTML
- `templates/social-post/` — posts Instagram / LinkedIn 1080×1080
- `Nikko-Eco-Historia-de-marca.html` — historia de marca completa

If creating visual artifacts (slides, mocks, documents, prototipos), copy assets out of this skill folder and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

## Reglas no negociables de la marca

1. **Claim principal**: "Tus objetivos, nuestra meta." — voz oficial corporativa. **Claim secundario**: "Tus metas, nuestro oficio." — voz del taller (Hogar / Obras).
2. **Wordmark**: "Nikko" en Geist bold + "Eco." en italic Fraunces ámbar. Nunca separar las dos palabras en líneas distintas. El punto final ("Eco.") **siempre** se mantiene.
3. **Sub-marcas**: SOLO "Nikko Seguros / Hogar / Obras / Capital". La palabra "Eco" aparece **únicamente** en la marca paraguas.
4. **Paleta**: tres familias y nada más — Tinta (`--ink-*`), Hueso (`--bone-*`), Ámbar (`--amber-*`). Un único acento cálido. No inventes colores nuevos.
5. **Tipografía**: Geist (sans) + Fraunces (serif, *siempre en italic*) + Geist Mono. Tracking negativo agresivo en display (-0.055em). Un titular = una sola familia.
6. **Esquinas casi rectas**. Pills sólo para badges.
7. **Voz**: directa, sin adornos, premium sin postureo. Nunca "lo antes posible" ni "por causas ajenas".

## Si el usuario invoca esta skill sin guía concreta

Pregúntale qué quiere construir o diseñar, haz preguntas para entender, y actúa como diseñador experto produciendo HTML artifacts o código de producción según el caso.
