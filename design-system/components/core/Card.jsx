export function Card({
  variant = "raised",
  padding = "md",
  accent = false,
  children
}) {
  const paddings = { sm: 16, md: 24, lg: 36, xl: 48 };
  const p = paddings[padding] ?? paddings.md;

  const variants = {
    raised: {
      background: "var(--bone-200)",
      border: "1px solid var(--border-soft)",
      color: "var(--text-body)",
      boxShadow: "var(--shadow-2)"
    },
    flat: {
      background: "var(--bone-200)",
      border: "1px solid var(--border-soft)",
      color: "var(--text-body)",
      boxShadow: "none"
    },
    inverse: {
      background: "var(--ink-700)",
      border: "1px solid var(--border-inverse)",
      color: "var(--text-inverse)",
      boxShadow: "none"
    },
    accent: {
      background: "var(--amber-400)",
      border: "1px solid var(--amber-400)",
      color: "var(--ink-900)",
      boxShadow: "none"
    }
  };
  const v = variants[variant] ?? variants.raised;

  const style = {
    padding: `${p}px`,
    borderRadius: "var(--radius-0)",
    fontFamily: "var(--font-sans)",
    borderLeft: accent ? "3px solid var(--amber-400)" : v.border,
    ...v
  };
  if (accent) style.borderLeft = "3px solid var(--amber-400)";

  return React.createElement(
    "div",
    { style, "data-component": "Card", "data-variant": variant },
    children
  );
}
