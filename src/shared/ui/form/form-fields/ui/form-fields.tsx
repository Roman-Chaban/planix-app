'use client';

import type { FormFieldsProps } from '../model/types';

import { Fragment } from 'react/jsx-runtime';
import { useFormContext, type FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { formFieldsRender } from './form-fields-render';

export const FormFields = <T extends FieldValues>({
  fields,
  translationNamespace,
  size = 'large',
}: Omit<FormFieldsProps<T>, 'register' | 'errors'>) => {
  const { t } = useTranslation(translationNamespace);
  const { control } = useFormContext<T>();

  return (
    <Fragment>
      {fields.map((field, index) => formFieldsRender(field, control, size, t, index))}
    </Fragment>
  );
};
