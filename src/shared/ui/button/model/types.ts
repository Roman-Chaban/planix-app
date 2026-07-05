import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type { WithChildren } from '@/shared/types/types';
import type { ButtonPresetKey } from '@/shared/ui/button';

export type ButtonVariant =
  'default' | 'outline' | 'soft' | 'tertiary' | 'transparent';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'compact';
export type ButtonShape = 'default' | 'rounded' | 'circle' | 'pill';
export type MaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type FontWeight =
  'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold';

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  maxWidth?: MaxWidth;
  fontWeight?: FontWeight;
  startIcon?: ReactNode;
  endIcon?: ReactNode;

  startIconClassName?: string;
  endIconClassName?: string;

  isLoading?: boolean;
  fullWidth?: boolean;
  preset?: ButtonPresetKey;
} & WithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;
