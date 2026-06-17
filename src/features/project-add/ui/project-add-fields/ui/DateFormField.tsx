'use client';

import type { FC, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import {
  applyDateMask,
  toISO,
  toInputFormat,
} from '@/features/project-add/ui/project-add-fields/lib/date';

import type { DateFormFieldProps } from '@/features/project-add/ui/project-add-fields/model/types';
import { NAMESPACE } from '@/shared/lib/i18n';
import { FormField } from '@/shared/ui';
import { CalendarIcon } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

const { TEXT } = INPUT_TYPES;

export const DateFormField: FC<DateFormFieldProps> = ({
  id,
  label,
  error,
  inputProps,
}) => {
  const { t } = useTranslation(NAMESPACE.PROJECT_ADD);
  const { value, onChange, placeholder, ...rest } = inputProps;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const masked = applyDateMask(event.target.value);
    const finalValue = masked.length === 10 ? toISO(masked) : masked;
    onChange(finalValue);
  };

  return (
    <FormField
      id={id}
      label={t(label)}
      error={error ? t(error) : ''}
      variant="default"
      startIcon={<CalendarIcon width={20} height={20} />}
      inputProps={{
        ...rest,
        type: TEXT,
        inputMode: 'numeric',
        maxLength: 10,
        placeholder,
        value: toInputFormat(value),
        onChange: handleChange,
      }}
    />
  );
};
