Botón base de Nikko. **Primary** (ámbar) para CTAs principales, **Secondary** (tinta) para acciones secundarias, **Outline** y **Ghost** sobre fondos claros, **Link** para acciones in-text.

```jsx
<Button variant="primary" size="md">Solicitar presupuesto</Button>
<Button variant="outline" size="sm">Más info</Button>
<Button variant="link">Ver detalle</Button>
```

**Reglas**:
- Sólo **un** botón primary por bloque visual.
- Tamaño `lg` reservado a hero y landing principal.
- Esquinas casi rectas (`radius-1`, 2 px) — nunca redondeadas estilo pill.
