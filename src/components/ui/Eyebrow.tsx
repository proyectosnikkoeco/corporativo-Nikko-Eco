/**
 * Eyebrow — antetítulo en mono uppercase con línea ámbar.
 * Spec: design-system/components/core/Eyebrow.jsx
 */
type Tone = "ink" | "inverse" | "accent";

export function Eyebrow({
  tone = "ink",
  withLine = true,
  children,
}: {
  tone?: Tone;
  withLine?: boolean;
  children: React.ReactNode;
}) {
  const color =
    tone === "accent"
      ? "var(--amber-500)"
      : tone === "inverse"
        ? "rgba(239,237,230,0.5)"
        : "var(--ink-400)";

  const lineColor =
    tone === "accent"
      ? "var(--amber-500)"
      : tone === "inverse"
        ? "rgba(239,237,230,0.4)"
        : "var(--ink-300)";

  return (
    <p
      data-component="Eyebrow"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        fontWeight: 500,
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        margin: 0,
        color,
      }}
    >
      {withLine && (
        <span
          style={{
            width: 24,
            height: 1,
            background: lineColor,
            display: "inline-block",
          }}
        />
      )}
      {children}
    </p>
  );
}
