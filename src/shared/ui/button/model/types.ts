import type { ButtonMinWidths, ButtonShapes, ButtonSizes, ButtonVariants } from './constants';

import type { ButtonPresetKey } from '../lib/presets';

import type { WithChildren } from '@types';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type BuildButtonClassNameParams = {
  variant: ButtonVariants;
  size: ButtonSizes;
  shape: ButtonShapes;
  fullWidth: boolean;
  minWidth?: ButtonMinWidths;
  className?: string;
};

export type ButtonContentProps = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  startIconClassName?: string;
  endIconClassName?: string;
} & WithChildren;

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
} & ButtonHTMLAttributes<HTMLButtonElement>;
