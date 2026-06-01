'use client';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ProjectDetailsSchema } from '@/features/project-add';

import { DateFormField } from './DateFormField';

export const StartDateField = () => {
  const { t } = useTranslation('projectAdd');
  const { control } = useFormContext<ProjectDetailsSchema>();

  const { field, fieldState } = useController({
    name: 'startDate',
    control,
  });

  return (
    <DateFormField
      id="startDate"
      label={t('startDateLabel')}
      error={fieldState.error?.message}
      inputProps={{ ...field, placeholder: t('startDatePlaceholder') }}
    />
  );
};
