import type { ButtonHTMLAttributes } from "react";
import "./Button.css";

type Variant = "primary" | "ghost" | "accent";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ variant = "primary", className = "", children, ...rest }: Props) {
  return (
    <button className={`btn btn-${variant} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}
