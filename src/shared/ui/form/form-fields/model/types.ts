import type { FORM_FIELD_KINDS, FormFieldKind, FormFieldLayout } from './constants';
import type { FormFieldSizes } from '../../form-field/model/constants';
import type { WithClassName } from '@types';
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
  UseFormReturn,
} from 'react-hook-form';

import type { ReactNode } from 'react';

export type { FormFieldKind, FormFieldLayout } from './constants';

export type DefaultFieldKind =
  typeof FORM_FIELD_KINDS.TEXT | typeof FORM_FIELD_KINDS.PASSWORD | typeof FORM_FIELD_KINDS.DATE;

export type FormFieldFeature = 'password-toggle' | 'none';

export type SharedFieldRendererProps<T extends FieldValues> = {
  control: UseFormReturn<T>['control'];
  size?: FormFieldSizes;
  t: (key: string) => string;
};

type BaseFieldConfig<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  placeholder?: string;
  autoComplete?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  feature?: FormFieldFeature;
  required?: boolean;
  gridArea?: string | null;
  size?: FormFieldSizes;
  group?: string;
} & WithClassName;

export type DefaultFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  kind?: DefaultFieldKind;
  type?: string;
};

type DateRangeFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  kind: typeof FORM_FIELD_KINDS.DATE_RANGE;
  startField: Path<T>;
  endField: Path<T>;
  startLabel?: string;
  endLabel?: string;
  startPlaceholder?: string;
  endPlaceholder?: string;
};

type TextareaFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  kind: typeof FORM_FIELD_KINDS.TEXTAREA;
};

type FileUploadFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  kind: typeof FORM_FIELD_KINDS.FILE_UPLOAD;
};

type PriceFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  kind: typeof FORM_FIELD_KINDS.PRICE;
  currency?: string;
};

type GroupFieldConfig<T extends FieldValues> = {
  kind: typeof FORM_FIELD_KINDS.GROUP;
  name?: string;
  label?: string;
  layout?: FormFieldLayout;
  className?: string;
  fields: readonly FormFieldConfig<T>[];
};

export type FormFieldConfig<T extends FieldValues> =
  | DefaultFieldConfig<T>
  | DateRangeFieldConfig<T>
  | TextareaFieldConfig<T>
  | FileUploadFieldConfig<T>
  | PriceFieldConfig<T>
  | GroupFieldConfig<T>;

export type FormFieldsProps<T extends FieldValues> = {
  fields: readonly FormFieldConfig<T>[];
  translationNamespace: string;
  errors: FieldErrors<T>;
  size?: FormFieldSizes;
  register: UseFormRegister<T>;
};

export type FieldByKind<T extends FieldValues, K extends FormFieldKind> = Extract<
  FormFieldConfig<T>,
  { kind: K }
>;

export type DefaultFieldValue<T extends FieldValues> = DefaultFieldConfig<T>;

export type DateRangeFieldProps<T extends FieldValues> = SharedFieldRendererProps<T> & {
  field: FieldByKind<T, typeof FORM_FIELD_KINDS.DATE_RANGE>;
};

export type DefaultFieldProps<T extends FieldValues> = SharedFieldRendererProps<T> & {
  field: DefaultFieldValue<T>;
};

export type FileUploadFieldProps<T extends FieldValues> = SharedFieldRendererProps<T> & {
  field: FieldByKind<T, typeof FORM_FIELD_KINDS.FILE_UPLOAD>;
};

export type TextareaFieldProps<T extends FieldValues> = SharedFieldRendererProps<T> & {
  field: FieldByKind<T, typeof FORM_FIELD_KINDS.TEXTAREA>;
};

export type PriceFieldProps<T extends FieldValues> = SharedFieldRendererProps<T> & {
  field: FieldByKind<T, typeof FORM_FIELD_KINDS.PRICE>;
};
