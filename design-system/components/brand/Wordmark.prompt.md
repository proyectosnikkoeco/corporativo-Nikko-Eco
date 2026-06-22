El wordmark oficial de **Nikko Eco**. "Nikko" en Geist bold + "Eco." en Fraunces italic ámbar, separados por un kerning negativo apretado.

```jsx
<Wordmark size="xl" tone="light" />
<Wordmark size="sm" tone="dark" as="span" />
```

**Variantes**: `size` (sm/md/lg/xl/2xl), `tone` (light=sobre tinta / dark=sobre papel), `as` (span/h1/...).

**Reglas**:
- Nunca separar "Nikko" del "Eco" en líneas distintas.
- El punto final (`Eco.`) **siempre** se mantiene. Es parte de la marca.
- En `tone="dark"` (papel) el ámbar usado es `--amber-600` para accesibilidad de contraste.
