'use client';

import type { DefaultFieldProps } from '../../model/types';

import { Controller, type FieldValues } from 'react-hook-form';

import { usePasswordToggle } from '@/shared/lib/hooks';
import { FormField } from '@/shared/ui';
import { ViewIcon, ViewOffIcon } from '@/shared/ui/icons';

import { FORM_FIELD_TYPES, FORM_FIELD_VARIANTS } from '../../../form-field/model/constants';
import { FORM_FIELD_KINDS } from '../../model/constants';

const { TEXT, PASSWORD } = FORM_FIELD_TYPES;
const { DEFAULT } = FORM_FIELD_VARIANTS;

export const DefaultField = <T extends FieldValues>({
  field,
  control,
  size,
  t,
}: DefaultFieldProps<T>) => {
  const { getVisibility, toggleVisibility } = usePasswordToggle();
  const isPassword = field.feature === 'password-toggle';
  const visible = isPassword && getVisibility(String(field.name));
  const type = isPassword ? (visible ? TEXT : PASSWORD) : (field.type ?? FORM_FIELD_KINDS.TEXT);
  const endIcon = isPassword ? visible ? <ViewIcon /> : <ViewOffIcon /> : field.endIcon;

  return (
    <Controller
      name={field.name}
      control={control}
      render={({ field: inputField, fieldState }) => {
        const errorText = fieldState.error?.message ? t(fieldState.error.message) : undefined;

        return (
          <FormField
            id={String(field.name)}
            label={t(field.label)}
            startIcon={field.startIcon}
            endIcon={endIcon}
            error={errorText}
            size={size}
            inputRef={inputField.ref}
            variant={DEFAULT}
            className={field.className}
            inputProps={{
              type,
              name: String(field.name),
              value: inputField.value ?? '',
              onBlur: inputField.onBlur,
              onChange: (event) => {
                const actualValue =
                  event && typeof event === 'object' && 'target' in event
                    ? event.target.value
                    : event;

                inputField.onChange(actualValue);
              },
              placeholder: field.placeholder ? t(field.placeholder) : undefined,
              autoComplete: field.autoComplete,
              required: field.required,
            }}
            onEndIconMouseDown={
              isPassword ? () => toggleVisibility(String(field.name), true) : undefined
            }
            onEndIconMouseUp={
              isPassword ? () => toggleVisibility(String(field.name), false) : undefined
            }
            onEndIconMouseLeave={
              isPassword ? () => toggleVisibility(String(field.name), false) : undefined
            }
          />
        );
      }}
    />
  );
};
