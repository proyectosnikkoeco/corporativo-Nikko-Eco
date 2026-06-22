/**
 * Badge / pill pequeño para estado o etiqueta.
 *
 */
export interface BadgeProps {
  variant?: "default" | "inverse" | "accent" | "accentSoft" | "positive" | "negative";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}
