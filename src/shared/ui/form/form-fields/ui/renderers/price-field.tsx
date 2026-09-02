import type { PriceFieldProps } from '../../model/types';

import { useState, type ChangeEvent } from 'react';
import { Controller, type FieldValues } from 'react-hook-form';

import { formatCurrency } from '@/shared/lib';

import { FormField } from '../../../form-field/ui/form-field';

export const PriceField = <T extends FieldValues>({ field, control, t }: PriceFieldProps<T>) => {
  const [editing, setEditing] = useState(false);

  return (
    <Controller
      name={field.name}
      control={control}
      render={({ field: inputField, fieldState }) => {
        const rawValue = inputField.value == null ? '' : String(inputField.value);
        const displayValue =
          !editing && rawValue !== '' && Number.isFinite(Number(rawValue))
            ? formatCurrency(Number(rawValue), field.currency)
            : rawValue;

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
          const nextValue = event.target.value.replace(',', '.').replace(/[^\d.]/g, '');
          const [integerPart, ...decimalParts] = nextValue.split('.');
          const normalizedValue = decimalParts.length
            ? `${integerPart}.${decimalParts.join('')}`
            : integerPart;

          inputField.onChange(normalizedValue);
        };

        return (
          <FormField
            id={String(field.name)}
            error={fieldState.error?.message ? t(fieldState.error.message) : undefined}
            label={t(field.label)}
            startIcon={field.startIcon}
            size={field.size}
            className={field.className}
            inputRef={inputField.ref}
            inputProps={{
              name: String(field.name),
              value: displayValue,
              onChange: handleChange,
              onFocus: () => setEditing(true),
              onBlur: () => {
                setEditing(false);
                inputField.onBlur();
              },
              placeholder: field.placeholder ? t(field.placeholder) : undefined,
              type: 'text',
              inputMode: 'decimal',
              required: field.required,
            }}
          />
        );
      }}
    />
  );
};
