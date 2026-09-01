'use client';

import type { TextareaFieldProps } from '../../model/types';

import { Controller, type FieldValues } from 'react-hook-form';

import { Textarea } from '@/shared/ui';

export function TextareaField<T extends FieldValues>({ field, control, t }: TextareaFieldProps<T>) {
  const textareaField = field;

  return (
    <Controller
      name={textareaField.name}
      control={control}
      render={({ field: inputField, fieldState }) => (
        <Textarea
          {...inputField}
          error={fieldState.error?.message ? t(fieldState.error.message) : ''}
          label={t(textareaField.label)}
          placeholder={textareaField.placeholder ? t(textareaField.placeholder) : ''}
        />
      )}
    />
  );
}
