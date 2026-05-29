import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'default' | 'outline' | 'soft' | 'tertiary' | 'transparent';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'compact';
export type ButtonShape = 'default' | 'rounded' | 'circle' | 'pill';

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;

  startIconClassName?: string;
  endIconClassName?: string;

  isLoading?: boolean;

  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
