import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'default' | 'outline' | 'soft' | 'tertiary' | 'circle';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'compact';

export type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  startIconClassName?: string;
  endIconClassName?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
