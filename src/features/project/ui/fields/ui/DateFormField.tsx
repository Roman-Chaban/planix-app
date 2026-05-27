'use client';

import type { FC, ChangeEvent } from 'react';

import { toDisplayDate, applyDateMask, toIsoDateOrPreserve } from '@/features/project/lib/date';
import type { DateFormFieldProps } from '@/features/project/ui/fields';
import { FormInputField } from '@/shared/ui';
import { CalendarIcon } from '@/shared/ui/icons';

export const DateFormField: FC<DateFormFieldProps> = ({
  id,
  label,
  error,
  className,
  inputProps,
}) => {
  const { value, onChange, placeholder, ...rest } = inputProps;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyDateMask(event.target.value);
    const finalValue = toIsoDateOrPreserve(maskedValue);

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
        type: 'text',
        inputMode: 'numeric',
        maxLength: 10,
        placeholder: placeholder,
        value: toDisplayDate(value),
        onChange: handleChange,
      }}
    />
  );
};
