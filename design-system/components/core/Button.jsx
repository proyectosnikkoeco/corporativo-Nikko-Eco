export function Button({
  variant = "primary",
  size = "md",
  icon = null,
  iconRight = null,
  children,
  onClick,
  disabled = false,
  type = "button"
}) {
  const sizes = {
    sm: { pad: "8px 14px",  fs: 12, gap: 6 },
    md: { pad: "12px 22px", fs: 14, gap: 8 },
    lg: { pad: "16px 28px", fs: 16, gap: 10 }
  };
  const s = sizes[size] ?? sizes.md;

  const variants = {
    primary: {
      background: "var(--amber-400)",
      color: "var(--ink-900)",
      border: "1px solid var(--amber-400)"
    },
    secondary: {
      background: "var(--ink-800)",
      color: "var(--bone-300)",
      border: "1px solid var(--ink-800)"
    },
    outline: {
      background: "transparent",
      color: "var(--ink-800)",
      border: "1px solid var(--ink-200)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ink-800)",
      border: "1px solid transparent"
    },
    link: {
      background: "transparent",
      color: "var(--amber-600)",
      border: "1px solid transparent",
      padding: 0,
      textDecoration: "underline",
      textUnderlineOffset: "3px",
      textDecorationThickness: "1px"
    }
  };
  const v = variants[variant] ?? variants.primary;

  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: `${s.gap}px`,
    padding: variant === "link" ? 0 : s.pad,
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: `${s.fs}px`,
    letterSpacing: "-0.01em",
    lineHeight: 1,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    borderRadius: "var(--radius-1)",
    transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    ...v
  };

  return React.createElement(
    "button",
    {
      type,
      onClick,
      disabled,
      style,
      "data-component": "Button",
      "data-variant": variant,
      "data-size": size
    },
    icon ? React.createElement("span", { style: { display: "inline-flex", alignItems: "center" } }, icon) : null,
    children,
    iconRight ? React.createElement("span", { style: { display: "inline-flex", alignItems: "center" } }, iconRight) : null
  );
}
