export function Wordmark({ size = "md", tone = "light", as = "span" }) {
  const sizes = {
    sm: 22,
    md: 38,
    lg: 64,
    xl: 96,
    "2xl": 144
  };
  const fontSize = sizes[size] ?? sizes.md;
  const isLight = tone === "light"; // light text on dark background

  const wrap = {
    fontFamily: "var(--font-brand)",
    fontWeight: 700,
    letterSpacing: "-0.06em",
    lineHeight: 0.86,
    fontSize: `${fontSize}px`,
    display: "inline-flex",
    alignItems: "flex-end",
    gap: `${Math.max(2, Math.round(fontSize * 0.04))}px`,
    color: isLight ? "var(--bone-300)" : "var(--ink-900)"
  };

  const eco = {
    fontFamily: "var(--font-brand-italic)",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "0.55em",
    letterSpacing: "-0.04em",
    marginBottom: "0.06em",
    lineHeight: 1,
    color: isLight ? "var(--amber-400)" : "var(--amber-600)"
  };

  const Tag = as;
  return React.createElement(
    Tag,
    { style: wrap, "data-component": "Wordmark" },
    "Nikko",
    React.createElement("span", { style: eco }, "Eco.")
  );
}
