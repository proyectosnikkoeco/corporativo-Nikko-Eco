# Traspaso a sesión local (Mac)

> Documento temporal. Bórralo cuando las tareas de abajo estén cerradas.
> Escrito el 2026-09-11 desde una sesión remota que no tenía acceso a las
> cuentas correctas de Vercel y GitHub.

## Cómo arrancar

Abre Claude Code en la carpeta del repo y dile:

> Lee HANDOFF.md y continúa por donde se quedó.

---

## Estado actual

La web es el sitio corporativo de **Proyectos Vialcar** (antes Nikko Eco).
Next.js 16 + Tailwind 4, desplegada en Vercel.

- `main` y `claude/zen-cray-k919pl` están ambas en `a72482c`.
- Todo el código está pusheado. No hay trabajo sin guardar.
- `npm ci && npm run build` pasa limpio en local.

### Lo que ya está hecho

- Renombrado completo Nikko Eco → Proyectos Vialcar en todo el código,
  correos transaccionales, favicon, icono Apple e imagen OG.
- Cuatro páginas por sub-marca en `/servicios/[slug]` (seguros, hogar,
  obras, capital), generadas estáticas, con View Transitions.
- Fotos de las cuatro especialidades integradas.
- Menú móvil, estados de navegación activa, accesibilidad (skip link,
  focus rings, `prefers-reduced-motion`), estilos de impresión.
- Structured data: `ProfessionalService`, `WebSite`, `Service` por
  sub-marca y `BreadcrumbList`.
- Vercel Analytics y Speed Insights integrados en el código.
- Banner de consentimiento RGPD que bloquea GA4 y Meta Pixel hasta que
  el visitante acepta. Probado en Chromium.

---

## ⚠️ Problema abierto: dos deploys fallidos

**Producción está servida desde `e110e2e`**, que es el commit del rebrand.
Los dos commits siguientes **no han llegado a producción**:

| Commit | Qué añade | Estado |
|---|---|---|
| `cee4efd` | Analytics + structured data + secciones de prueba social | no desplegado |
| `a72482c` | Banner de consentimiento RGPD | error en el build |

Consecuencia práctica: la web se ve bien y dice Vialcar, pero no tiene
analítica ni banner de cookies.

**No se pudo diagnosticar desde la sesión remota** porque la red bloqueaba
`vercel.com` y el MCP de Vercel estaba conectado a la cuenta equivocada.

### Pistas ya descartadas

- El lockfile está en sync: `npm ci` funciona.
- `npm run build` limpio pasa sin errores ni warnings.
- Los paquetes nuevos (`@vercel/analytics@2.0.1`,
  `@vercel/speed-insights@2.0.0`) no declaran `engines`, así que no es
  incompatibilidad de versión de Node.
- El mismo Node compiló `e110e2e` correctamente.

### Primer paso sugerido

Leer los logs reales del build fallido (`vercel inspect --logs`, o el
dashboard). Antes de eso, probar un simple **Redeploy**: muchos fallos en
plan Hobby son transitorios (cola o timeout) y se resuelven solos.

---

## Comprobación previa: cuentas correctas

Esto fue la causa de casi toda la fricción. **Verifícalo antes de nada:**

```bash
vercel whoami   # tiene que ser la cuenta "Nikko Eco", NO "enviplana"
gh auth status  # tiene que tener acceso a proyectosnikkoeco
```

El proyecto de Vercel vive en el equipo `Nikko Eco`
(`prj_e9xujeamZGAxgRHA6ZBpjA0DIRXN`). La cuenta `enviplana` **no lo ve**:
devuelve 404.

---

## Tareas pendientes, por orden

### 1. Arreglar el deploy (bloqueante)

Que `a72482c` llegue a producción.

### 2. Renombrar el proyecto de Vercel

`corporativo-nikko-eco` → `vialcar`.

Ya se intentó desde el dashboard y **no se guardó** — verificar que el
cambio persiste. Cambia la URL a `vialcar.vercel.app`. No rompe la
conexión con GitHub (Vercel guarda el ID del repo, no el nombre).

### 3. Activar Web Analytics

Pestaña Analytics del proyecto → Enable. El código ya está desplegado,
no hace falta redeploy. Para verificar: navegar un par de páginas en
ventana de incógnito (los bloqueadores tumban `va.vercel-scripts.com`).

### 4. Renombrar el equipo de Vercel

`Nikko Eco` → `Proyectos Vialcar`. Cosmético.

### 5. Renombrar el repo de GitHub

`corporativo-Nikko-Eco` → `web-vialcar`. GitHub redirige las URLs viejas.
Después, actualizar el remote local:

```bash
git remote set-url origin git@github.com:proyectosnikkoeco/web-vialcar.git
```

La organización `proyectosnikkoeco` **se deja como está** — renombrarla
afecta a accesos e invitaciones y aporta poco.

### 6. Conectar el dominio `vialcar.es`

Ya está comprado. Requiere añadirlo en Vercel y crear los registros DNS
en el registrador donde se compró. Vercel indica cuáles.

---

## Pendiente de datos del cliente

No se puede avanzar sin esta información:

- **Datos registrales** para `src/lib/legal.ts`: CIF, domicilio social e
  inscripción en el Registro Mercantil. Ahora hay marcadores `TODO` y son
  obligatorios por la LSSI-CE antes de operar comercialmente.
- **Dirección postal real**, para completar el schema `ProfessionalService`
  y abrir ficha de Google Business Profile. Deliberadamente solo se declara
  `addressCountry: ES`; publicar una dirección inventada perjudica el SEO
  local.
- **Diseño definitivo del isotipo.** Ahora mismo es una `V` con punto ámbar
  como marcador de posición, heredando el patrón de la `N` anterior.
  Afecta a `src/components/brand/Isotype.tsx`, `src/app/icon.tsx`,
  `src/app/apple-icon.tsx` y `src/app/opengraph-image.tsx`.
- **Clientes y casos reales** para `clients` y `caseStudies` en
  `src/lib/brand.ts`. Están vacíos y las secciones no se renderizan
  mientras lo estén. No rellenar con datos inventados.
- **Fotografía propia.** Las cinco imágenes actuales son render/stock y se
  nota. Además el tono no es homogéneo: hero, hogar y obras son de hora
  dorada; seguros y capital son de luz diurna fría.
- **URLs de LinkedIn e Instagram** para `brand.social`.

---

## Contexto que no está en el código

- El dominio `vialcar.es` está comprado pero la SL **aún no está
  constituida**.
- Los IDs de GA4 y Meta Pixel se configuran como variables de entorno
  (`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`). Mientras estén
  vacías la web no hace ninguna petición a terceros. Rellenarlas ya es
  seguro: el banner de consentimiento está operativo.
- Todo el material de marca (fotos, manual) está en el Drive de
  `proyectosnikkoeco@gmail.com`. **No borrar esa cuenta** aunque se migre
  la identidad a `vialcar.es`.
- La carpeta `design-system/` sigue con la marca Nikko Eco. No la consume
  el runtime salvo los tokens CSS, así que no corre prisa, pero está
  pendiente de renombrar.
