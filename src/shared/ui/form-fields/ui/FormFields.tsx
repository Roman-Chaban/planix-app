'use client';

import type { FieldValues } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import { usePasswordToggle } from '@/shared/lib/hooks';
import { FormField } from '@/shared/ui';
import type { FormFieldsProps } from '@/shared/ui/form-fields';
import { ViewIcon, ViewOffIcon } from '@/shared/ui/icons';
import { INPUT_TYPES, INPUT_VARIANTS } from '@/shared/ui/input';

const { TEXT, PASSWORD } = INPUT_TYPES;
const { DEFAULT } = INPUT_VARIANTS;

export function FormFields<T extends FieldValues>({
  fields,
  register,
  errors,
  translationNamespace,
}: FormFieldsProps<T>) {
  const { t } = useTranslation(translationNamespace);
  const { getVisibility, toggle } = usePasswordToggle();

  return (
    <>
      {fields.map((field) => {
        const isPassword = field.feature === 'password-toggle';

        const visible = isPassword && getVisibility(field.name);
        const fieldError = errors?.[field.name];

        const error =
          typeof fieldError?.message === 'string'
            ? t(fieldError.message)
            : undefined;

        const type = isPassword ? (visible ? TEXT : PASSWORD) : field.type;

        const endIcon = isPassword ? (
          visible ? (
            <ViewIcon />
          ) : (
            <ViewOffIcon />
          )
        ) : (
          field.endIcon
        );

        const registerResult = register(field.name);
        const { ref, ...registerInputProps } = registerResult;

        return (
          <FormField
            key={field.name}
            id={field.name}
            label={t(field.label)}
            startIcon={field.startIcon}
            endIcon={endIcon}
            onEndIconClick={isPassword ? () => toggle(field.name) : undefined}
            error={t(error ?? '')}
            inputRef={ref}
            variant={DEFAULT}
            inputProps={{
              ...registerInputProps,
              type,
              placeholder: field.placeholder ? t(field.placeholder) : undefined,
              autoComplete: field.autoComplete,
            }}
          />
        );
      })}
    </>
  );
}
