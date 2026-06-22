/**
 * Eyebrow / antetítulo en Geist Mono uppercase con línea ámbar opcional.
 *
 */
export interface EyebrowProps {
  tone?: "ink" | "inverse" | "accent";
  withLine?: boolean;
  children: React.ReactNode;
}
