export const BUTTON_TYPES = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
} as const;

export const BUTTON_SIZES = {
  COMPACT: 'compact',
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
} as const;

export const BUTTON_VARIANTS = {
  DEFAULT: 'default',
  OUTLINE: 'outline',
  SOFT: 'soft',
  TERTIARY: 'tertiary',
  TRANSPARENT: 'transparent',
} as const;

export const BUTTON_SHAPES = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
  CIRCLE: 'circle',
  PILL: 'pill',
} as const;

export const BUTTON_MAX_WIDTH = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  '2XL': '2xl',
} as const;

export const BUTTON_UI_PROPS = [
  'variant',
  'size',
  'shape',
  'fullWidth',
  'maxWidth',
  'preset',
  'isLoading',
  'startIcon',
  'endIcon',
  'startIconClassName',
  'endIconClassName',
] as const;
