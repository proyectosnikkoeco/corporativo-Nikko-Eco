/**
 * Wordmark oficial Nikko Eco.
 * Spec: design-system/components/brand/Wordmark.jsx
 *
 * "Nikko" en Geist bold + "Eco." en italic Fraunces ámbar.
 * Nunca separar las dos palabras en líneas distintas.
 * El punto final ("Eco.") SIEMPRE se mantiene.
 */
type Size = "sm" | "md" | "lg" | "xl" | "2xl";
type Tone = "light" | "dark";

const SIZES: Record<Size, number> = {
  sm: 22,
  md: 38,
  lg: 64,
  xl: 96,
  "2xl": 144,
};

export function Wordmark({
  size = "md",
  tone = "dark",
  as: Tag = "span",
}: {
  size?: Size;
  tone?: Tone;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const fontSize = SIZES[size];
  const isLight = tone === "light";

  return (
    <Tag
      data-component="Wordmark"
      style={{
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        letterSpacing: "-0.06em",
        lineHeight: 0.86,
        fontSize: `${fontSize}px`,
        display: "inline-flex",
        alignItems: "flex-end",
        gap: `${Math.max(2, Math.round(fontSize * 0.04))}px`,
        color: isLight ? "var(--bone-300)" : "var(--ink-900)",
        whiteSpace: "nowrap",
      }}
    >
      Nikko
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: "0.55em",
          letterSpacing: "-0.04em",
          marginBottom: "0.06em",
          lineHeight: 1,
          color: isLight ? "var(--amber-400)" : "var(--amber-600)",
        }}
      >
        Eco.
      </span>
    </Tag>
  );
}
