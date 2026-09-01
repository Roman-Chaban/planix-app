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
  const dateField = field;

  return (
    <Box className={buildClassName(styles.group, styles.row)}>
      <Controller
        name={dateField.startField}
        control={control}
        render={({ field: inputField, fieldState }) => (
          <FormDateField
            size={size}
            id={String(dateField.startField)}
            label={t(dateField.startLabel ?? dateField.label)}
            placeholder={t(dateField.startPlaceholder ?? '')}
            error={fieldState.error?.message ? t(fieldState.error.message) : undefined}
            inputProps={{
              value: inputField.value ?? '',
              ref: inputField.ref,
              required: dateField.required,
              onChange: inputField.onChange,
              onBlur: inputField.onBlur,
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
            label={t(dateField.endLabel ?? dateField.label)}
            placeholder={t(dateField.endPlaceholder ?? '')}
            error={fieldState.error?.message ? t(fieldState.error.message) : undefined}
            inputProps={{
              value: inputField.value ?? '',
              ref: inputField.ref,
              required: dateField.required,
              onChange: inputField.onChange,
              onBlur: inputField.onBlur,
            }}
          />
        )}
      />
    </Box>
  );
};
