/**
 * Wordmark oficial Proyectos Vialcar.
 * Spec: design-system/components/brand/Wordmark.jsx
 *
 * "Proyectos Vialcar" en Geist bold + "." final en italic Fraunces ámbar.
 * Nunca separar las palabras en líneas distintas.
 * El punto final SIEMPRE se mantiene.
 */
type Size = "sm" | "md" | "lg" | "xl" | "2xl";
type Tone = "light" | "dark";

const SIZES: Record<Size, number> = {
  sm: 18,
  md: 30,
  lg: 52,
  xl: 78,
  "2xl": 116,
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
        letterSpacing: "-0.055em",
        lineHeight: 0.86,
        fontSize: `${fontSize}px`,
        display: "inline-flex",
        alignItems: "flex-end",
        gap: `${Math.max(1, Math.round(fontSize * 0.02))}px`,
        color: isLight ? "var(--bone-300)" : "var(--ink-900)",
        whiteSpace: "nowrap",
      }}
    >
      Proyectos Vialcar
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: "1em",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          color: isLight ? "var(--amber-400)" : "var(--amber-600)",
        }}
      >
        .
      </span>
    </Tag>
  );
}
