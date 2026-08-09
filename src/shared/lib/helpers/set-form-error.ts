import type { SetFormErrorParams } from './helpers.types';
import type { FieldValues } from 'react-hook-form';

export const setFormErrors = <T extends FieldValues>({
  form,
  fields,
  message,
  type = 'server',
}: SetFormErrorParams<T>) => {
  fields.forEach((field) => {
    form.setError(field, {
      type,
      message,
    });
  });
};
