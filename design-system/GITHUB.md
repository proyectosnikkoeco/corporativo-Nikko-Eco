# Cómo subir este proyecto a GitHub

Este proyecto se conecta con el repo:
**https://github.com/proyectosnikkoeco/corporativo-Nikko-Eco**

El repo está vacío. Para llenarlo desde tu máquina:

## 1. Descarga el proyecto

Usa el botón **Download project** (arriba a la derecha en la app) para bajarte un ZIP con toda la estructura.

## 2. Sube a GitHub desde terminal

```bash
# 1. Descomprime el ZIP en una carpeta local
cd nikko-eco-identidad

# 2. Inicializa git
git init
git branch -M main

# 3. Conecta con el repo
git remote add origin https://github.com/proyectosnikkoeco/corporativo-Nikko-Eco.git

# 4. Primer commit
git add .
git commit -m "Initial brand identity system — v0.1"

# 5. Push
git push -u origin main
```

## 3. Si prefieres GitHub Desktop / Cursor / VS Code

- **Abre la carpeta** del proyecto descargado en tu editor.
- En el panel de Git: "Initialize repository" → "Publish to GitHub" → conecta con `corporativo-Nikko-Eco`.

---

## Lo que vas a subir

```
.
├── readme.md                       ← guía de marca completa
├── SKILL.md                        ← skill para Claude Code
├── styles.css                      ← entry CSS
├── tokens/                         ← colors, type, spacing, …
├── components/
│   ├── brand/                      ← Wordmark, SubMark
│   └── core/                       ← Button, Card, Badge, Eyebrow, Input
├── templates/
│   ├── deck/                       ← Deck corporativo 16:9
│   ├── business-card/              ← Tarjeta de visita
│   ├── invoice/                    ← Presupuesto / factura
│   ├── email-signature/            ← Firma de email
│   └── social-post/                ← Posts redes 1080×1080
├── Nikko-Eco-Historia-de-marca.html ← historia de marca
└── _descartado/                    ← exploraciones (puedes borrar antes de subir)
```

## 4. Cómo usar este DS con Claude Code

Una vez subido:

```bash
# En tu máquina, dentro del repo:
gh repo clone proyectosnikkoeco/corporativo-Nikko-Eco
cd corporativo-Nikko-Eco
claude
```

Claude Code leerá `SKILL.md` y `readme.md` automáticamente y tendrá acceso a tokens, componentes y plantillas para construir lo que necesites con la identidad correcta.
