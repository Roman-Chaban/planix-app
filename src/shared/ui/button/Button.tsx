import type { FC } from "react";

import { classNames } from "@/shared/lib/helpers/class-names/index";

import styles from "./styles.module.scss";

import type { ButtonProps } from "./model/types";

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  outline = "primary",
  size = "md",
  className,
  endIcon,
  startIcon,
  disabled,
  children,
  type,
}) => {
  const classes = classNames(
    styles.button,
    styles[variant],
    styles[size],
    styles[outline],
    className,
  );

  return (
    <button className={classes} disabled={disabled} type={type}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};
