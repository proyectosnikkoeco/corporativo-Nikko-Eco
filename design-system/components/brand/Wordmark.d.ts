/**
 * The Nikko Eco wordmark — "Nikko" in Geist bold + "Eco." in italic Fraunces amber.
 *
 */
export interface WordmarkProps {
  /** Visual size. sm=email/firma, md=documento, lg=cabecera, xl=hero, 2xl=pared. */
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  /** Tono según fondo. "light"=sobre tinta, "dark"=sobre papel hueso. */
  tone?: "light" | "dark";
  /** Tag wrapper. Default span. Use "h1" for hero headings. */
  as?: "span" | "div" | "h1" | "h2" | "p";
}
