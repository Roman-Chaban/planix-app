import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'outline' | 'soft' | 'tertiary' | 'circle';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'compact';
export type ButtonOutline =
  | 'white'
  | 'light-blue'
  | 'transparent'
  | 'disabled'
  | 'double-outline'
  | 'none';

export type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  outlined?: ButtonOutline;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  startIconClassName?: string;
  endIconClassName?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
