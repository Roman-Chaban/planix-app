export const INPUT_TYPES = {
  TEXT: 'text',
  CHECKBOX: 'checkbox',
  TEL: 'tel',
  EMAIL: 'email',
  PASSWORD: 'password',
  SEARCH: 'search',
  DATE: 'date',
  FILE: 'file',
} as const;

export const INPUT_VARIANTS = {
  DEFAULT: 'default',
  HOVER: 'hover',
  FILED: 'filed',
  DISABLED: 'disabled',
  ERROR: 'error',
  NO_BORDER: 'noBorder',
} as const;

export const INPUT_SIZES = {
  HIDDEN: 'hidden',
  DEFAULT: 'default',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type FormFieldSize = (typeof INPUT_SIZES)[keyof typeof INPUT_SIZES];
