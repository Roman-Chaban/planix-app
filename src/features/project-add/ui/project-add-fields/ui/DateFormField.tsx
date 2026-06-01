'use client';

import type { FC, ChangeEvent } from 'react';

import {
  toDisplay,
  applyDateMask,
  toISO,
  type DateFormFieldProps,
} from '@/features/project-add/ui/project-add-fields';

import { FormInputField } from '@/shared/ui';
import { CalendarIcon } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

const { TEXT } = INPUT_TYPES;

export const DateFormField: FC<DateFormFieldProps> = ({
  id,
  label,
  error,
  className,
  inputProps,
}) => {
  const { value, onChange, placeholder, ...rest } = inputProps;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const masked = applyDateMask(event.target.value);
    const finalValue = masked.length === 10 ? toISO(masked) : masked;
    onChange(finalValue);
  };

  return (
    <FormInputField
      id={id}
      label={label}
      error={error}
      className={className}
      startIcon={<CalendarIcon width={20} height={20} />}
      inputProps={{
        ...rest,
        type: TEXT,
        inputMode: 'numeric',
        maxLength: 10,
        placeholder: placeholder,
        value: toDisplay(value),
        onChange: handleChange,
      }}
    />
  );
};
