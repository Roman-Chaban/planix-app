'use client';

import type { TextareaFieldProps } from '../../model/types';

import { Controller, type FieldValues } from 'react-hook-form';

import { Textarea } from '@/shared/ui';

export const TextareaField = <T extends FieldValues>({
  field,
  control,
  t,
}: TextareaFieldProps<T>) => {
  return (
    <Controller
      name={field.name}
      control={control}
      render={({ field: inputField, fieldState }) => {
        const errorText = fieldState.error?.message ? t(fieldState.error.message) : undefined;

        return (
          <Textarea
            {...inputField}
            error={errorText}
            label={t(field.label)}
            placeholder={field.placeholder ? t(field.placeholder) : ''}
          />
        );
      }}
    />
  );
};
