import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type { WithChildren } from '@/shared/types/types';
import type { ButtonPresetKey } from '@/shared/ui/button';

export type Variant = 'default' | 'outline' | 'soft' | 'tertiary' | 'transparent';
export type Size = 'sm' | 'md' | 'lg' | 'compact';
export type Shape = 'default' | 'rounded' | 'circle' | 'pill';
export type MinWidth = 'content' | 'sm' | 'md' | 'lg';
export type ButtonPresets = Record<string, ButtonPreset>;

export type ButtonPreset = {
  variant?: Variant;
  size?: Size;
  shape?: Shape;
  minWidth?: MinWidth;
  fullWidth?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  shape?: Shape;
  fullWidth?: boolean;
  minWidth?: MinWidth;

  startIcon?: ReactNode;
  endIcon?: ReactNode;
  startIconClassName?: string;
  endIconClassName?: string;

  isLoading?: boolean;
  preset?: ButtonPresetKey;
} & WithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;
