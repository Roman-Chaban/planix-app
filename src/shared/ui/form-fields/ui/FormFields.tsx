'use client';

import type { FieldValues } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import { usePasswordToggle } from '@/shared/lib/hooks';
import { FormInputField } from '@/shared/ui';
import type { FormFieldsProps } from '@/shared/ui/form-fields';
import { ViewIcon, ViewOffIcon } from '@/shared/ui/icons';

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
        const errorMessage = errors[field.name]?.message;

        const isPasswordField = field.feature === 'password-toggle';
        const visible = isPasswordField ? getVisibility(field.name) : false;

        return (
          <FormInputField
            key={field.name}
            id={field.name}
            label={t(field.label)}
            startIcon={field.startIcon}
            endIcon={
              isPasswordField ? (
                visible ? (
                  <ViewIcon />
                ) : (
                  <ViewOffIcon />
                )
              ) : (
                field.endIcon
              )
            }
            onEndIconClick={
              isPasswordField ? () => toggle(field.name) : undefined
            }
            error={
              typeof errorMessage === 'string' ? t(errorMessage) : undefined
            }
            inputProps={{
              ...register(field.name),
              type: isPasswordField
                ? visible
                  ? 'text'
                  : 'password'
                : field.type,
              placeholder: field.placeholder ? t(field.placeholder) : undefined,
              autoComplete: field.autoComplete,
            }}
          />
        );
      })}
    </>
  );
}
