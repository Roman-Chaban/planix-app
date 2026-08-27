import type { WithClassName } from '@types';
import type { FieldErrors, FieldValues, UseFormRegister, Path } from 'react-hook-form';

import type { ReactNode } from 'react';

import type { FormFieldSize } from '@/shared/ui/input/lib/constants';

type FormFieldFeature = 'password-toggle' | 'none';

export type FormFieldConfig<T extends FieldValues> = WithClassName & {
  name: Path<T>;
  label: string;
  type: string;
  placeholder?: string;
  autoComplete?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  feature?: FormFieldFeature;
  required?: boolean;
  gridArea?: string | null;
};

export type FormFieldsProps<T extends FieldValues> = {
  fields: readonly FormFieldConfig<T>[];
  translationNamespace: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  size?: FormFieldSize;
};
