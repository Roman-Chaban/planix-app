'use client';

import type { FC, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { applyDateMask, toISO, toInputFormat } from '@/shared/lib';

import { NAMESPACE } from '@/shared/i18n';
import { FormField } from '@/shared/ui';
import type { FormDateFieldProps } from '@/shared/ui/form/form-filed';
import { CalendarIcon } from '@/shared/ui/icons';
import { INPUT_TYPES, INPUT_VARIANTS } from '@/shared/ui/input';

const { TEXT } = INPUT_TYPES;
const { DEFAULT } = INPUT_VARIANTS;

export const FormDateField: FC<FormDateFieldProps> = ({
  id,
  label,
  placeholder,
  error,
  inputProps,
}) => {
  const { t } = useTranslation(NAMESPACE.PROJECT_ADD);

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
