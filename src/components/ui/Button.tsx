import Link from "next/link";
import type { ComponentProps } from "react";

/**
 * Button — primary / secondary / outline / ghost / link.
 * Spec: design-system/components/core/Button.jsx
 */
type Variant = "primary" | "secondary" | "outline" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

const VARIANT: Record<Variant, string> = {
  primary:
    "bg-amber-400 text-ink-900 border border-amber-400 hover:bg-amber-500 hover:border-amber-500",
  secondary:
    "bg-ink-800 text-bone-300 border border-ink-800 hover:bg-ink-700 hover:border-ink-700",
  outline:
    "bg-transparent text-ink-800 border border-ink-200 hover:border-ink-400",
  ghost:
    "bg-transparent text-ink-800 border border-transparent hover:bg-ink-100",
  link: "bg-transparent text-amber-600 underline underline-offset-[3px] decoration-1 hover:text-amber-500",
};

const SIZE: Record<Size, string> = {
  sm: "px-3.5 py-2 text-xs gap-1.5",
  md: "px-5 py-3 text-sm gap-2",
  lg: "px-7 py-4 text-base gap-2.5",
};

const BASE =
  "inline-flex items-center justify-center font-semibold tracking-[-0.01em] leading-none rounded-xs transition-colors duration-[160ms] ease-out cursor-pointer disabled:opacity-45 disabled:cursor-not-allowed";

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: {
  variant?: Variant;
  size?: Size;
} & Omit<ComponentProps<"button">, "size">) {
  const padded = variant === "link" ? "p-0 border-0" : SIZE[size];
  return (
    <button
      data-component="Button"
      data-variant={variant}
      className={`${BASE} ${padded} ${VARIANT[variant]} ${className}`}
      {...rest}
    />
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className = "",
  href,
  children,
  ...rest
}: {
  variant?: Variant;
  size?: Size;
} & ComponentProps<typeof Link>) {
  const padded = variant === "link" ? "p-0 border-0" : SIZE[size];
  return (
    <Link
      data-component="LinkButton"
      data-variant={variant}
      className={`${BASE} ${padded} ${VARIANT[variant]} ${className}`}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
}
