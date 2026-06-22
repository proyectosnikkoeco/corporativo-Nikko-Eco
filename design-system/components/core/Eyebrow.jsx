export function Eyebrow({ tone = "ink", children, withLine = true }) {
  const tones = {
    ink:     { color: "var(--ink-400)" },
    inverse: { color: "rgba(239,237,230,0.5)" },
    accent:  { color: "var(--amber-500)" }
  };
  const t = tones[tone] ?? tones.ink;

  const lineColor = tone === "accent" ? "var(--amber-500)" :
                    tone === "inverse" ? "rgba(239,237,230,0.4)" :
                    "var(--ink-300)";

  const style = {
    fontFamily: "var(--font-meta)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    margin: 0,
    ...t
  };

  return React.createElement(
    "p",
    { style, "data-component": "Eyebrow", "data-tone": tone },
    withLine ? React.createElement("span", { style: { width: 24, height: 1, background: lineColor, display: "inline-block" } }) : null,
    children
  );
}
