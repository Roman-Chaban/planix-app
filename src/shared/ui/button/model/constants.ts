export const BUTTON_TYPES = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
} as const;

export type ButtonTypes = (typeof BUTTON_TYPES)[keyof typeof BUTTON_TYPES];

export const BUTTON_SIZES = {
  COMPACT: 'compact',
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
} as const;

export type ButtonSizes = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];

export const BUTTON_VARIANTS = {
  DEFAULT: 'default',
  OUTLINE: 'outline',
  SOFT: 'soft',
  TERTIARY: 'tertiary',
  TRANSPARENT: 'transparent',
} as const;

export type ButtonVariants = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

export const BUTTON_SHAPES = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
  CIRCLE: 'circle',
  PILL: 'pill',
} as const;

export type ButtonShapes = (typeof BUTTON_SHAPES)[keyof typeof BUTTON_SHAPES];

export const BUTTON_MIN_WIDTHS = {
  CONTENT: 'content',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
} as const;

export type ButtonMinWidths = (typeof BUTTON_MIN_WIDTHS)[keyof typeof BUTTON_MIN_WIDTHS];
