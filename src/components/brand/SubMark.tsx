/**
 * SubMark — sub-marcas Nikko Seguros / Hogar / Obras / Capital.
 * Spec: design-system/components/brand/SubMark.jsx
 *
 * "Nikko" en Geist bold + descriptor en medium ámbar. SIN "Eco".
 */
type SubBrand = "Seguros" | "Hogar" | "Obras" | "Capital";
type Size = "sm" | "md" | "lg" | "xl";
type Tone = "light" | "dark";

const SIZES: Record<Size, number> = { sm: 20, md: 32, lg: 48, xl: 72 };

export function SubMark({
  brand,
  size = "md",
  tone = "dark",
}: {
  brand: SubBrand;
  size?: Size;
  tone?: Tone;
}) {
  const fontSize = SIZES[size];
  const isLight = tone === "light";

  return (
    <span
      data-component="SubMark"
      style={{
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        letterSpacing: "-0.05em",
        lineHeight: 1,
        fontSize: `${fontSize}px`,
        display: "inline-flex",
        alignItems: "baseline",
        gap: "0.18em",
        color: isLight ? "var(--bone-300)" : "var(--ink-900)",
        whiteSpace: "nowrap",
      }}
    >
      Nikko
      <span
        style={{
          fontWeight: 500,
          letterSpacing: "-0.04em",
          color: isLight ? "var(--amber-400)" : "var(--amber-600)",
        }}
      >
        {brand}
      </span>
    </span>
  );
}
