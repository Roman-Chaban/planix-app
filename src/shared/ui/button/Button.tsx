import type { FC } from "react";
import type { ButtonProps } from "./types";
import { classNames } from "@/shared/lib/class-names/index";
import styles from "./button.module.scss";

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  outline = "primary",
  size = "md",
  className,
  endIcon,
  startIcon,
  disabled,
  children,
}) => {
  const classes = classNames(
    styles.button,
    styles[variant],
    styles[size],
    styles[outline],
    className,
  );

  return (
    <button className={classes} disabled={disabled}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};
