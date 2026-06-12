import type { ButtonHTMLAttributes } from "react";

export type AuthButtonProps = {
  label: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
