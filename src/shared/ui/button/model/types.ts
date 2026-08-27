import type { WithChildren } from '@types';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type { ButtonPresetKey } from '@/shared/ui/button';

export type ButtonVariants = 'default' | 'outline' | 'soft' | 'tertiary' | 'transparent';
export type ButtonSizes = 'sm' | 'md' | 'lg' | 'compact';
export type ButtonShapes = 'normal' | 'rounded' | 'circle' | 'pill';
export type ButtonMinWidths = 'content' | 'sm' | 'md' | 'lg';
export type ButtonPresets = Record<string, ButtonPreset>;

export type ButtonPreset = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  shape?: ButtonShapes;
  minWidth?: ButtonMinWidths;
  fullWidth?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

export type ButtonProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  shape?: ButtonShapes;
  fullWidth?: boolean;
  minWidth?: ButtonMinWidths;

  startIcon?: ReactNode;
  endIcon?: ReactNode;
  startIconClassName?: string;
  endIconClassName?: string;

  isLoading?: boolean;
  preset?: ButtonPresetKey;
} & WithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;
