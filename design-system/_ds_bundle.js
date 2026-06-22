/* @ds-bundle: {"format":3,"namespace":"NikkoEcoIdentidad_d12537","components":[{"name":"SubMark","sourcePath":"components/brand/SubMark.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/brand/SubMark.jsx":"7a0f4fc0a40e","components/brand/Wordmark.jsx":"25c7fd8d10f0","components/core/Badge.jsx":"b6cfec735358","components/core/Button.jsx":"03d8a157418f","components/core/Card.jsx":"e5fc4e184292","components/core/Eyebrow.jsx":"2a8037dfd1b5","components/core/Input.jsx":"565a2fe6cc5a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NikkoEcoIdentidad_d12537 = window.NikkoEcoIdentidad_d12537 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/SubMark.jsx
try { (() => {
function SubMark({
  brand = "Seguros",
  size = "md",
  tone = "light"
}) {
  const sizes = {
    sm: 20,
    md: 32,
    lg: 48,
    xl: 72
  };
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
  return React.createElement("span", {
    style: wrap,
    "data-component": "SubMark"
  }, "Nikko", React.createElement("span", {
    style: desc
  }, " " + brand));
}
Object.assign(__ds_scope, { SubMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SubMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function Wordmark({
  size = "md",
  tone = "light",
  as = "span"
}) {
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
  return React.createElement(Tag, {
    style: wrap,
    "data-component": "Wordmark"
  }, "Nikko", React.createElement("span", {
    style: eco
  }, "Eco."));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  variant = "default",
  size = "md",
  children
}) {
  const sizes = {
    sm: {
      pad: "3px 8px",
      fs: 10
    },
    md: {
      pad: "4px 10px",
      fs: 11
    },
    lg: {
      pad: "6px 12px",
      fs: 12
    }
  };
  const s = sizes[size] ?? sizes.md;
  const variants = {
    default: {
      background: "var(--ink-100)",
      color: "var(--ink-800)",
      border: "1px solid var(--ink-200)"
    },
    inverse: {
      background: "var(--ink-700)",
      color: "var(--bone-300)",
      border: "1px solid var(--border-inverse-strong)"
    },
    accent: {
      background: "var(--amber-400)",
      color: "var(--ink-900)",
      border: "1px solid var(--amber-400)"
    },
    accentSoft: {
      background: "rgba(240,183,62,0.12)",
      color: "var(--amber-600)",
      border: "1px solid rgba(240,183,62,0.35)"
    },
    positive: {
      background: "rgba(91,226,107,0.15)",
      color: "var(--positive-dim)",
      border: "1px solid rgba(91,226,107,0.35)"
    },
    negative: {
      background: "rgba(184,80,80,0.12)",
      color: "var(--negative-dim)",
      border: "1px solid rgba(184,80,80,0.35)"
    }
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
  return React.createElement("span", {
    style,
    "data-component": "Badge",
    "data-variant": variant
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
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
    sm: {
      pad: "8px 14px",
      fs: 12,
      gap: 6
    },
    md: {
      pad: "12px 22px",
      fs: 14,
      gap: 8
    },
    lg: {
      pad: "16px 28px",
      fs: 16,
      gap: 10
    }
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
  return React.createElement("button", {
    type,
    onClick,
    disabled,
    style,
    "data-component": "Button",
    "data-variant": variant,
    "data-size": size
  }, icon ? React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center"
    }
  }, icon) : null, children, iconRight ? React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center"
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  variant = "raised",
  padding = "md",
  accent = false,
  children
}) {
  const paddings = {
    sm: 16,
    md: 24,
    lg: 36,
    xl: 48
  };
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
  return React.createElement("div", {
    style,
    "data-component": "Card",
    "data-variant": variant
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  tone = "ink",
  children,
  withLine = true
}) {
  const tones = {
    ink: {
      color: "var(--ink-400)"
    },
    inverse: {
      color: "rgba(239,237,230,0.5)"
    },
    accent: {
      color: "var(--amber-500)"
    }
  };
  const t = tones[tone] ?? tones.ink;
  const lineColor = tone === "accent" ? "var(--amber-500)" : tone === "inverse" ? "rgba(239,237,230,0.4)" : "var(--ink-300)";
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
  return React.createElement("p", {
    style,
    "data-component": "Eyebrow",
    "data-tone": tone
  }, withLine ? React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: lineColor,
      display: "inline-block"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
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
    sm: {
      pad: "8px 12px",
      fs: 13
    },
    md: {
      pad: "12px 14px",
      fs: 14
    },
    lg: {
      pad: "16px 16px",
      fs: 16
    }
  };
  const s = sizes[size] ?? sizes.md;
  const wrap = {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    fontFamily: "var(--font-sans)"
  };
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
  return React.createElement("div", {
    style: wrap,
    "data-component": "Input"
  }, label ? React.createElement("label", {
    htmlFor: id,
    style: labelStyle
  }, label) : null, React.createElement("input", {
    id,
    type,
    value,
    defaultValue,
    placeholder,
    disabled,
    onChange,
    style: inputStyle
  }), hint || error ? React.createElement("span", {
    style: hintStyle
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

__ds_ns.SubMark = __ds_scope.SubMark;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

})();
