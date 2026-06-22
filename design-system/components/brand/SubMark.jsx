export function SubMark({ brand = "Seguros", size = "md", tone = "light" }) {
  const sizes = { sm: 20, md: 32, lg: 48, xl: 72 };
  const fontSize = sizes[size] ?? sizes.md;
  const isLight = tone === "light";

  const wrap = {
    fontFamily: "var(--font-brand)",
    fontWeight: 700,
    letterSpacing: "-0.05em",
    lineHeight: 1,
    fontSize: `${fontSize}px`,
    display: "inline-flex",
    alignItems: "baseline",
    gap: "0.18em",
    color: isLight ? "var(--bone-300)" : "var(--ink-900)"
  };

  const desc = {
    fontWeight: 500,
    letterSpacing: "-0.04em",
    color: isLight ? "var(--amber-400)" : "var(--amber-600)"
  };

  return React.createElement(
    "span",
    { style: wrap, "data-component": "SubMark" },
    "Nikko",
    React.createElement("span", { style: desc }, " " + brand)
  );
}
