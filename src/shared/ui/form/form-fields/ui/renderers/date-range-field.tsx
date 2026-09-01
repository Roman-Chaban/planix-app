'use client';

import type { DateRangeFieldProps } from '../../model/types';

import { Controller, type FieldValues } from 'react-hook-form';

import { Box, FormDateField } from '@/shared/ui';

import styles from '../form-fields.module.scss';

export const DateRangeField = <T extends FieldValues>({
  field,
  control,
  size,
  t,
}: DateRangeFieldProps<T>) => {
  const dateField = field;

  return (
    <Box className={`${styles.group} ${styles.row}`}>
      <Controller
        name={dateField.startField}
        control={control}
        render={({ field: inputField, fieldState }) => (
          <FormDateField
            size={size}
            id={String(dateField.startField)}
            label={dateField.startLabel ?? dateField.label}
            placeholder={
              dateField.startPlaceholder ?? dateField.placeholder ?? 'startDatePlaceholder'
            }
            error={fieldState.error?.message ? t(fieldState.error.message) : undefined}
            inputProps={{
              value: inputField.value ?? '',
              onChange: inputField.onChange,
              onBlur: inputField.onBlur,
              ref: inputField.ref,
              required: dateField.required,
            }}
          />
        )}
      />
      <Controller
        name={dateField.endField}
        control={control}
        render={({ field: inputField, fieldState }) => (
          <FormDateField
            size={size}
            id={String(dateField.endField)}
            label={dateField.endLabel ?? dateField.label}
            placeholder={dateField.endPlaceholder ?? dateField.placeholder ?? 'dueDatePlaceholder'}
            error={fieldState.error?.message ? t(fieldState.error.message) : undefined}
            inputProps={{
              value: inputField.value ?? '',
              onChange: inputField.onChange,
              onBlur: inputField.onBlur,
              ref: inputField.ref,
              required: dateField.required,
            }}
          />
        )}
      />
    </Box>
  );
};
