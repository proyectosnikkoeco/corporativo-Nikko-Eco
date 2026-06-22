export function Badge({
  variant = "default",
  size = "md",
  children
}) {
  const sizes = {
    sm: { pad: "3px 8px", fs: 10 },
    md: { pad: "4px 10px", fs: 11 },
    lg: { pad: "6px 12px", fs: 12 }
  };
  const s = sizes[size] ?? sizes.md;

  const variants = {
    default:  { background: "var(--ink-100)", color: "var(--ink-800)", border: "1px solid var(--ink-200)" },
    inverse:  { background: "var(--ink-700)", color: "var(--bone-300)", border: "1px solid var(--border-inverse-strong)" },
    accent:   { background: "var(--amber-400)", color: "var(--ink-900)", border: "1px solid var(--amber-400)" },
    accentSoft: { background: "rgba(240,183,62,0.12)", color: "var(--amber-600)", border: "1px solid rgba(240,183,62,0.35)" },
    positive: { background: "rgba(91,226,107,0.15)", color: "var(--positive-dim)", border: "1px solid rgba(91,226,107,0.35)" },
    negative: { background: "rgba(184,80,80,0.12)", color: "var(--negative-dim)", border: "1px solid rgba(184,80,80,0.35)" }
  };
  const v = variants[variant] ?? variants.default;

  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: s.pad,
    fontFamily: "var(--font-meta)",
    fontSize: `${s.fs}px`,
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    ...v
  };

  return React.createElement(
    "span",
    { style, "data-component": "Badge", "data-variant": variant },
    children
  );
}
