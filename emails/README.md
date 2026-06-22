# Plantillas de email

Carpeta reservada para las plantillas de email transaccional y comercial
(confirmaciones, presupuestos, recordatorios, etc.).

## Stack previsto

[React Email](https://react.email/) — componentes React que renderizan
HTML compatible con todos los clientes de correo.

Cuando se vaya a empezar:

```bash
pnpm add react-email @react-email/components -E
```

Estructura prevista:

```
emails/
├── presupuesto.tsx          # Email con el presupuesto adjunto / inline
├── confirmacion-contacto.tsx
└── components/
    └── ...                  # Header, Footer, Button reutilizables
```

La identidad visual (colores, logo, tipografía) se importa desde
`@/lib/brand` para mantener coherencia con la web.
