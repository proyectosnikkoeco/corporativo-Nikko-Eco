/**
 * Card / superficie con bordes finos y radios casi rectos.
 *
 */
export interface CardProps {
  variant?: "raised" | "flat" | "inverse" | "accent";
  padding?: "sm" | "md" | "lg" | "xl";
  /** Añade un borde izquierdo ámbar para destacar la tarjeta. */
  accent?: boolean;
  children: React.ReactNode;
}
