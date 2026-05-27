'use client';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ProjectDetailsFormData } from '@/features/project';
import { validateDateOrder } from '@/features/project/lib/validators';

import { DateFormField } from './DateFormField';

export const StartDateField = () => {
  const { t } = useTranslation('projectDetails');

  const { control, watch } = useFormContext<ProjectDetailsFormData>();

  const dueDate = watch('dueDate');

  const { field, fieldState } = useController({
    name: 'startDate',
    control,
    rules: {
      validate: (value) =>
        validateDateOrder(value, dueDate, 'start', {
          invalid: 'Invalid date format',
          outOfOrder: 'Start date cannot be after due date',
        }),
    },
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
