'use client';

import type { DateRangeFieldProps } from '../../model/types';

import { Controller, type FieldValues } from 'react-hook-form';

import { buildClassName } from '@/shared/lib';
import { Box, FormDateField } from '@/shared/ui';

import styles from '../form-fields.module.scss';

export const DateRangeField = <T extends FieldValues>({
  field,
  control,
  size,
  t,
}: DateRangeFieldProps<T>) => {
  return (
    <Box className={buildClassName(styles.group, styles.row)}>
      <Controller
        name={field.startField}
        control={control}
        render={({ field: inputField, fieldState }) => {
          const errorText = fieldState.error?.message ? t(fieldState.error.message) : undefined;

          return (
            <FormDateField
              size={size}
              id={String(field.startField)}
              label={t(field.startLabel ?? field.label)}
              placeholder={t(field.startPlaceholder ?? '')}
              error={errorText}
              inputProps={{
                value: inputField.value ?? '',
                ref: inputField.ref,
                required: field.required,
                onChange: inputField.onChange,
                onBlur: inputField.onBlur,
              }}
            />
          );
        }}
      />
      <Controller
        name={field.endField}
        control={control}
        render={({ field: inputField, fieldState }) => {
          const errorText = fieldState.error?.message ? t(fieldState.error.message) : undefined;

          return (
            <FormDateField
              size={size}
              id={String(field.endField)}
              label={t(field.endLabel ?? field.label)}
              placeholder={t(field.endPlaceholder ?? '')}
              error={errorText}
              inputProps={{
                value: inputField.value ?? '',
                ref: inputField.ref,
                required: field.required,
                onChange: inputField.onChange,
                onBlur: inputField.onBlur,
              }}
            />
          );
        }}
      />
    </Box>
  );
};
