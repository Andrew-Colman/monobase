import * as React from "react";
import * as styles from "./Button.styles";
import { cx } from "linaria";

type ButtonVariant = "default" | "primary" | "destructive";

type ButtonProps = { variant?: ButtonVariant };

const variantStyles: Record<ButtonVariant, string | undefined> = {
  default: undefined,
  primary: styles.buttonPrimary,
  destructive: styles.buttonDestructive
};

export const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  return (
    <button className={cx(styles.button, variant && variantStyles[variant])}>
      {children}
    </button>
  );
};
