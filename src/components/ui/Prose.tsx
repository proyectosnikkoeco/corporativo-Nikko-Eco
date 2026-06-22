/** Helpers tipográficos para cuerpos de texto largos (legales, etc.). */

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="pt-6 font-sans text-[20px] font-bold tracking-[-0.02em] text-ink-900">
      {children}
    </h2>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}
