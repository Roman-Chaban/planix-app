import type {
  ButtonMinWidths,
  ButtonShapes,
  ButtonSizes,
  ButtonTypes,
  ButtonVariants,
} from './constants';

import type { ButtonPresetKey } from '../lib/presets';

import type { WithChildren, WithClassName } from '@types';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type BuildButtonClassNameParams = {
  variant: ButtonVariants;
  size: ButtonSizes;
  shape: ButtonShapes;
  fullWidth: boolean;
  minWidth?: ButtonMinWidths;
} & WithClassName;

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
  type?: ButtonTypes;
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
