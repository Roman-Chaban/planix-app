import type { ButtonProps } from './types';

import { BUTTON_SHAPES, BUTTON_SIZES, BUTTON_VARIANTS } from './constants';

export const BUTTON_DEFAULTS: Required<
  Pick<ButtonProps, 'variant' | 'size' | 'shape' | 'fullWidth'>
> = {
  variant: BUTTON_VARIANTS.DEFAULT,
  size: BUTTON_SIZES.COMPACT,
  shape: BUTTON_SHAPES.DEFAULT,
  fullWidth: false,
};
