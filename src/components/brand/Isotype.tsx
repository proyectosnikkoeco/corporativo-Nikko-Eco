/**
 * Isotipo oficial Nikko Eco: la "N" en Geist extrabold con el punto ámbar.
 * Spec: design-system/assets/logo/isotype-*.svg
 *
 * El punto siempre es ámbar. La "N" cambia según el fondo:
 *  - tone="dark"  → "N" oscura (sobre fondos claros / hueso)
 *  - tone="light" → "N" clara  (sobre fondos oscuros / tinta)
 */
type Tone = "light" | "dark";

export function Isotype({
  size = 40,
  tone = "dark",
  title = "Nikko Eco",
}: {
  size?: number;
  tone?: Tone;
  title?: string;
}) {
  const nFill = tone === "light" ? "var(--bone-300)" : "var(--ink-900)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
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
        fill={nFill}
      >
        N
      </text>
      <circle cx="146" cy="138" r="12" fill="var(--amber-400)" />
    </svg>
  );
}
