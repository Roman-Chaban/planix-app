'use client';

import { type FieldValues, Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { buildClassName } from '@/shared/lib';
import { usePasswordToggle } from '@/shared/lib/hooks';
import { FormField } from '@/shared/ui';
import type { FormFieldsProps } from '@/shared/ui/form/form-fields';
import { ViewIcon, ViewOffIcon } from '@/shared/ui/icons';
import { INPUT_TYPES, INPUT_VARIANTS } from '@/shared/ui/input';

import styles from './FormFields.module.scss';

const { TEXT, PASSWORD } = INPUT_TYPES;
const { DEFAULT } = INPUT_VARIANTS;

export function FormFields<T extends FieldValues>({
  fields,
  translationNamespace,
}: Omit<FormFieldsProps<T>, 'register' | 'errors'>) {
  const { t } = useTranslation(translationNamespace);

  const { getVisibility, toggleVisibility } = usePasswordToggle();

  const { control } = useFormContext<T>();

  return (
    <>
      {fields.map((field) => {
        const isPassword = field.feature === 'password-toggle';
        const visible = isPassword && getVisibility(field.name);
        const type = isPassword ? (visible ? TEXT : PASSWORD) : field.type;

        const endIcon = isPassword ? visible ? <ViewIcon /> : <ViewOffIcon /> : field.endIcon;

        return (
          <Controller
            key={field.name}
            name={field.name}
            control={control}
            render={({ field: { onChange, onBlur, value, ref }, fieldState }) => {
              const errorText = fieldState.error?.message ? t(fieldState.error.message) : undefined;

              return (
                <FormField
                  id={field.name}
                  label={t(field.label)}
                  startIcon={field.startIcon}
                  endIcon={endIcon}
                  error={errorText}
                  inputRef={ref}
                  variant={DEFAULT}
                  className={buildClassName(styles[field.gridArea ?? ''])}
                  inputProps={{
                    type,
                    name: field.name,
                    value: value ?? '',
                    onBlur,
                    onChange: (event) => {
                      const actualValue =
                        event && typeof event === 'object' && 'target' in event
                          ? event.target.value
                          : event;
                      onChange(actualValue);
                    },
                    placeholder: field.placeholder ? t(field.placeholder) : undefined,
                    autoComplete: field.autoComplete,
                    required: field.required,
                  }}
                  onEndIconMouseDown={
                    isPassword ? () => toggleVisibility(field.name, true) : undefined
                  }
                  onEndIconMouseUp={
                    isPassword ? () => toggleVisibility(field.name, false) : undefined
                  }
                  onEndIconMouseLeave={
                    isPassword ? () => toggleVisibility(field.name, false) : undefined
                  }
                />
              );
            }}
          />
        );
      })}
    </>
  );
}
