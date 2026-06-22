export function Input({
  label,
  hint,
  error,
  type = "text",
  size = "md",
  value,
  defaultValue,
  placeholder,
  onChange,
  disabled = false,
  id
}) {
  const sizes = {
    sm: { pad: "8px 12px",  fs: 13 },
    md: { pad: "12px 14px", fs: 14 },
    lg: { pad: "16px 16px", fs: 16 }
  };
  const s = sizes[size] ?? sizes.md;

  const wrap = { display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-sans)" };
  const labelStyle = {
    fontFamily: "var(--font-meta)",
    fontSize: 10.5,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ink-400)",
    fontWeight: 600
  };
  const inputStyle = {
    fontFamily: "var(--font-sans)",
    fontSize: `${s.fs}px`,
    padding: s.pad,
    border: `1px solid ${error ? "var(--negative)" : "var(--ink-200)"}`,
    background: disabled ? "var(--bone-300)" : "var(--bone-100)",
    color: "var(--ink-900)",
    borderRadius: "var(--radius-1)",
    outline: "none",
    width: "100%",
    transition: "border-color var(--dur-fast) var(--ease-out)"
  };
  const hintStyle = {
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    color: error ? "var(--negative)" : "var(--ink-400)",
    lineHeight: 1.3
  };

  return React.createElement(
    "div",
    { style: wrap, "data-component": "Input" },
    label ? React.createElement("label", { htmlFor: id, style: labelStyle }, label) : null,
    React.createElement("input", {
      id, type, value, defaultValue, placeholder, disabled, onChange,
      style: inputStyle
    }),
    (hint || error) ? React.createElement("span", { style: hintStyle }, error || hint) : null
  );
}
