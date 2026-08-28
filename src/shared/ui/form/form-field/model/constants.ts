export const FORM_FIELD_TYPES = {
  TEXT: 'text',
  CHECKBOX: 'checkbox',
  TEL: 'tel',
  EMAIL: 'email',
  PASSWORD: 'password',
  SEARCH: 'search',
  DATE: 'date',
  FILE: 'file',
} as const;

export type FromFieldTypes = (typeof FORM_FIELD_TYPES)[keyof typeof FORM_FIELD_TYPES];

export const FORM_FIELD_VARIANTS = {
  DEFAULT: 'default',
  HOVER: 'hover',
  FILED: 'filed',
  DISABLED: 'disabled',
  ERROR: 'error',
  NO_BORDER: 'noBorder',
} as const;

export type FormFieldVariants = (typeof FORM_FIELD_VARIANTS)[keyof typeof FORM_FIELD_VARIANTS];

export const FORM_FIELD_SIZES = {
  HIDDEN: 'hidden',
  DEFAULT: 'default',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type FormFieldSizes = (typeof FORM_FIELD_SIZES)[keyof typeof FORM_FIELD_SIZES];

export const ICON_POSITION = {
  START: 'start',
  END: 'end',
} as const;

export type IconPosition = (typeof ICON_POSITION)[keyof typeof ICON_POSITION];
