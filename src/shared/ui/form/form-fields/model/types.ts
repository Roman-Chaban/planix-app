import type { FormFieldKind } from './constants';
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

export type DefaultFieldKind = 'text' | 'password' | 'date';
export type FieldGroupLayout = 'row' | 'column';
export type FormFieldFeature = 'password-toggle' | 'none';

export type SharedFieldRendererProps<T extends FieldValues> = {
  control: UseFormReturn<T>['control'];
  size?: FormFieldSizes;
  t: (key: string) => string;
};

export type FieldByKind<T extends FieldValues, K extends FormFieldKind> = Extract<
  FormFieldConfig<T>,
  { kind: K }
>;

export type DefaultFieldValue<T extends FieldValues> = DefaultFieldConfig<T>;

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
  kind: 'date-range';
  startField: Path<T>;
  endField: Path<T>;
  startLabel?: string;
  endLabel?: string;
  startPlaceholder?: string;
  endPlaceholder?: string;
};

type TextareaFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  kind: 'textarea';
};

type FileUploadFieldConfig<T extends FieldValues> = BaseFieldConfig<T> & {
  kind: 'file-upload';
};

type GroupFieldConfig<T extends FieldValues> = {
  kind: 'group';
  name?: string;
  label?: string;
  layout?: FieldGroupLayout;
  className?: string;
  fields: readonly FormFieldConfig<T>[];
};

export type FormFieldConfig<T extends FieldValues> =
  | DefaultFieldConfig<T>
  | DateRangeFieldConfig<T>
  | TextareaFieldConfig<T>
  | FileUploadFieldConfig<T>
  | GroupFieldConfig<T>;

export type FormFieldsProps<T extends FieldValues> = {
  fields: readonly FormFieldConfig<T>[];
  translationNamespace: string;
  errors: FieldErrors<T>;
  size?: FormFieldSizes;
  register: UseFormRegister<T>;
};

export type DateRangeFieldProps<T extends FieldValues> = SharedFieldRendererProps<T> & {
  field: FieldByKind<T, 'date-range'>;
};

export type DefaultFieldProps<T extends FieldValues> = SharedFieldRendererProps<T> & {
  field: DefaultFieldValue<T>;
};

export type FileUploadFieldProps<T extends FieldValues> = SharedFieldRendererProps<T> & {
  field: FieldByKind<T, 'file-upload'>;
};

export type TextareaFieldProps<T extends FieldValues> = SharedFieldRendererProps<T> & {
  field: FieldByKind<T, 'textarea'>;
};
