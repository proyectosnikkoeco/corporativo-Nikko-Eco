# Nikko Eco — Design System

**Identidad corporativa de Nikko Eco**, grupo de servicio inmobiliario integral con cuatro especialidades: Seguros, Hogar, Obras y Capital.

Este proyecto es el sistema vivo de la marca: tokens (color, tipografía, espaciado), wordmark, sub-marcas y plantillas. Cualquier diseño de Nikko (web, deck, papelería, redes) debe nacer aquí.

---

## Claim

**Tus objetivos, nuestra meta.** · Voz oficial de la marca paraguas, corporativa.
**Tus metas, nuestro oficio.** · Voz secundaria del taller, cálida — para Hogar y Obras.

## Manifiesto

> No nos gustan las cosas a medias.
> Ni las llamadas sin contestar.
> Ni los plazos sin cumplir.
> Ni los presupuestos sin cerrar.
> **Por eso existe Nikko.**

---

## Visual Foundations

### Paleta

Tres familias y nada más. Esa contención es la marca.

- **Tinta** (`--ink-*`) — fondos oscuros corporativos, texto sobre claro. Base `ink-800 #0A0E1A`.
- **Hueso** (`--bone-*`) — papel claro, fondo de documentos. Base `bone-300 #EFEDE6`.
- **Ámbar** (`--amber-*`) — único acento cálido del sistema. Primario `amber-400 #F0B73E`. Usar para destacar, no para decorar.

Estados (positivo / negativo) existen pero son secundarios. La marca no se apoya en color para diferenciar — se apoya en tipografía y espacio.

### Tipografía

- **Geist** (sans, 300–900) — wordmark, titulares, UI, body. Tracking muy negativo en display (`-0.055em`).
- **Fraunces** (serif, ital, óptico variable) — siempre en italic cuando se usa como display. Es la voz literaria del sistema: el "Eco", énfasis editorial, leads.
- **Geist Mono** — metadatos, eyebrows, etiquetas técnicas. Tracking positivo (`0.22em`), uppercase.

Regla de oro: **un titular = una sola familia**. No mezclar sans + serif en la misma frase salvo el wordmark.

### Espaciado

Base 4 px. Generoso. Premium. Nikko no apila — respira.

### Esquinas y sombras

- **Radios casi rectos**. `radius-0` y `radius-1` (0 y 2 px) por defecto. Pills (`radius-pill`) reservadas para estado/badge.
- **Sombras sutiles** o ninguna. La separación es por color y borde fino, no por elevación.

### Movimiento

Discreto. Easing serio (`ease-out` o `ease-in-out`), sin rebotes. Durations entre 160–420 ms para UI; 680 ms para entradas hero.

---

## Content Fundamentals

### Voz

Directos. Sin adornos. Premium pero sin postureo. Españoles sin localismos. Operativos sin tecnicismos.

**Sí** | **No**
---|---
"Su técnico llega hoy" | "Le visitaremos lo antes posible"
"Plazo cerrado, presupuesto cerrado" | "Plazo orientativo, presupuesto a confirmar"
"Un técnico nuestro te llama" | "Su solicitud será atendida en breve"
"Si no llegamos a tiempo, te lo compensamos" | "Por causas ajenas, ha habido retraso"

### Cinco principios

1. **Aparecemos.** Cuando dijimos, donde dijimos.
2. **Cumplimos.** Plazo, presupuesto y alcance no se mueven sin avisar antes.
3. **Cuidamos.** Cada metro como si fuera nuestro.
4. **Medimos.** Datos, expedientes, fotos, tiempos. Sin opacidad.
5. **Hablamos.** Sin jerga, sin letra pequeña, sin promesas vacías.

### Estructura

Una marca madre, **Nikko Eco**, y cuatro sub-marcas hijas:

- **Nikko Seguros** — B2B compañías
- **Nikko Hogar** — Particulares y comunidades
- **Nikko Obras** — Reformas integrales y subcontrata
- **Nikko Capital** — Inversión inmobiliaria

La palabra "Eco" se mantiene **sólo en la marca paraguas** y aparece siempre en italic Fraunces. Las sub-marcas son siempre "Nikko [Descriptor]".

---

## Iconografía

Sin sistema cerrado todavía. Hasta que se decida, usar:

- **Lucide Icons** vía CDN para UI ([lucide.dev](https://lucide.dev))
- Stroke 1.5 px, esquinas rectas
- Nunca emoji en producto corporativo (sí permitido en redes informales si se acuerda)

---

## Componentes

**Brand**
- `Wordmark` — el wordmark oficial Nikko Eco (5 tamaños, 2 tonos)
- `SubMark` — sub-marcas Nikko Seguros / Hogar / Obras / Capital

**Core UI**
- `Button` — primary / secondary / outline / ghost / link, 3 tamaños
- `Card` — raised / flat / inverse / accent, con borde izquierdo ámbar opcional
- `Badge` — pill de estado en mono uppercase
- `Eyebrow` — antetítulo con línea ámbar
- `Input` — campo de texto con label mono

La namespace de runtime es **`window.NikkoEcoIdentidad_d12537`** (cambia sólo si se renombra el proyecto).

---

## Estructura del proyecto

```
styles.css                 → entry point, sólo @imports
tokens/                    → CSS variables (colors, type, spacing, …)
brand/                     → wordmark, sub-marcas, claims (cards)
tokens/cards/              → cards visuales de los tokens
components/                → componentes UI base (Button, Card, …) — pendiente
templates/                 → plantillas listas para copiar (deck, papelería) — pendiente
```

---

## Pendiente

- [ ] Plantilla de deck corporativo (`templates/deck/`)
- [ ] Plantilla de tarjeta de visita
- [ ] Plantilla de presupuesto / factura
- [ ] Plantilla de email signature
- [ ] Plantilla de redes sociales
- [ ] Plantilla landing/web
- [ ] Manual de marca PDF imprimible
- [ ] Datos reales (ciudades cubiertas, número de expedientes/año, hitos)

---

**Estado**: v0.1 — borrador. Iterando con el cliente.
