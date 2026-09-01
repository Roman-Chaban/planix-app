'use client';

import type { FormDateFieldProps } from '../model/types';

import type { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { NAMESPACE } from '@/shared/i18n';
import { applyDateMask, toISO, toInputFormat } from '@/shared/lib';

import { FormField } from '@/shared/ui';
import { CalendarIcon } from '@/shared/ui/icons';

import { FORM_FIELD_TYPES, FORM_FIELD_VARIANTS } from '../model/constants';

const { TEXT } = FORM_FIELD_TYPES;
const { DEFAULT } = FORM_FIELD_VARIANTS;

export const FormDateField = ({
  id,
  label,
  placeholder,
  error,
  size,
  inputProps,
}: FormDateFieldProps) => {
  const { t } = useTranslation(NAMESPACE.PROJECT_CREATE);

  const { value, onChange, ref, required, ...rest } = inputProps;

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
      variant={DEFAULT}
      size={size}
      startIcon={<CalendarIcon width={20} height={20} />}
      inputRef={ref}
      inputProps={{
        ...rest,
        type: TEXT,
        inputMode: 'numeric',
        maxLength: 10,
        placeholder: t(placeholder),
        value: toInputFormat(value),
        onChange: handleChange,
        required: required,
      }}
    />
  );
};
