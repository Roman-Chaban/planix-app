export const FORM_FIELD_KINDS = {
  TEXT: 'text',
  PASSWORD: 'password',
  DATE: 'date',
  DATE_RANGE: 'date-range',
  TEXTAREA: 'textarea',
  FILE_UPLOAD: 'file-upload',
  PRICE: 'price',
  GROUP: 'group',
} as const;

export type FormFieldKind = (typeof FORM_FIELD_KINDS)[keyof typeof FORM_FIELD_KINDS];

export const FORM_FIELD_LAYOUTS = {
  ROW: 'row',
  COLUMN: 'column',
} as const;

export type FormFieldLayout = (typeof FORM_FIELD_LAYOUTS)[keyof typeof FORM_FIELD_LAYOUTS];
