import type { FieldErrors, FieldValues, UseFormRegister, Path } from 'react-hook-form';

import type { ReactNode } from 'react';

type FormFieldFeature = 'password-toggle' | 'none';

export type FormFieldConfig<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  type: string;
  placeholder?: string;
  autoComplete?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  feature?: FormFieldFeature;
  required?: boolean;
  gridArea?: string;
};

export type FormFieldsProps<T extends FieldValues> = {
  fields: readonly FormFieldConfig<T>[];
  translationNamespace: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};
