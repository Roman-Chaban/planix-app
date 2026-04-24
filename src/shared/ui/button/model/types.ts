import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "soft" | "tertiary";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonOutline =
  | "white"
  | "light-blue"
  | "transparent"
  | "disabled"
  | "double-outline"
  | "none";

export type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: ButtonOutline;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
