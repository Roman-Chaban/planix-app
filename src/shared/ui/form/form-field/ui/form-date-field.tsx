'use client';

import type { FormDateFieldProps } from '../model/types';

import { type ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { NAMESPACE } from '@/shared/i18n';
import { applyDateMask, toDisplay, toInputFormat, toISO } from '@/shared/lib';

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

  const [inputValue, setInputValue] = useState(() => toInputFormat(value));
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!isEditing) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInputValue(toInputFormat(value));
    }
  }, [value, isEditing]);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyDateMask(event.target.value);

    if (maskedValue.length === 10) {
      const isoValue = toISO(maskedValue);

      if (isoValue) {
        onChange(isoValue);
        setInputValue(maskedValue);
        setIsEditing(false);

        return;
      }
    }

    setInputValue(maskedValue);
    onChange('');
  };

  const handleFocus = () => {
    setIsEditing(true);
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
        value: isEditing ? inputValue : toDisplay(value),
        onChange: handleDateChange,
        onFocus: handleFocus,
        required,
      }}
    />
  );
};
