import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type { ButtonPresetKey } from '@/shared/ui/button';

export type ButtonVariant =
  | 'default'
  | 'outline'
  | 'soft'
  | 'tertiary'
  | 'transparent';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'compact';
export type ButtonShape = 'default' | 'rounded' | 'circle' | 'pill';
export type MaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  maxWidth?: MaxWidth;
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;

  startIconClassName?: string;
  endIconClassName?: string;

  isLoading?: boolean;
  fullWidth?: boolean;
  preset?: ButtonPresetKey;
} & ButtonHTMLAttributes<HTMLButtonElement>;
