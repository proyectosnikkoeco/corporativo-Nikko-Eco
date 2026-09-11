/**
 * Isotipo Proyectos Vialcar: la "V" en Geist extrabold con el punto ámbar.
 *
 * Placeholder — mismo patrón que el antiguo "N." pero con V.
 * El diseño final del isotipo está pendiente de definición por el cliente.
 *
 * El punto siempre es ámbar. La "V" cambia según el fondo:
 *  - tone="dark"  → "V" oscura (sobre fondos claros / hueso)
 *  - tone="light" → "V" clara  (sobre fondos oscuros / tinta)
 */
type Tone = "light" | "dark";

export function Isotype({
  size = 40,
  tone = "dark",
  title = "Proyectos Vialcar",
}: {
  size?: number;
  tone?: Tone;
  title?: string;
}) {
  const vFill = tone === "light" ? "var(--bone-300)" : "var(--ink-900)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="36 38 128 128"
      role="img"
      aria-label={title}
      style={{ display: "block" }}
    >
      <text
        x="92"
        y="138"
        textAnchor="middle"
        fontFamily="var(--font-sans), 'Helvetica Neue', Arial, sans-serif"
        fontWeight={800}
        fontSize={140}
        letterSpacing={-7}
        fill={vFill}
      >
        V
      </text>
      <circle cx="150" cy="138" r="12" fill="var(--amber-400)" />
    </svg>
  );
}
