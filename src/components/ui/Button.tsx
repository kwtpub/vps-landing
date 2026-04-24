import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import "./Button.css";

type Variant = "primary" | "ghost" | "accent";

type CommonProps = {
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "style" | "children"> & {
    href?: undefined;
  };

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "style" | "children" | "href"> & {
    href: string;
  };

type Props = ButtonProps | AnchorProps;

export function Button(props: Props) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const cls = `btn btn-${variant} ${className}`.trim();

  if ("href" in rest && rest.href) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
