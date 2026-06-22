/**
 * Input de texto Nikko. Label en mono uppercase + caja minimal.
 *
 */
export interface InputProps {
  label?: string;
  hint?: string;
  error?: string;
  type?: "text" | "email" | "tel" | "number" | "password" | "url";
  size?: "sm" | "md" | "lg";
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
}
