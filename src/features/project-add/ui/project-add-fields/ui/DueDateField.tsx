'use client';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ProjectDetailsFormData } from '@/features/project-add';
import { validateDateOrder } from '@/features/project-add/ui/project-add-fields';

import { DateFormField } from './DateFormField';

export const DueDateField = () => {
  const { t } = useTranslation('projectAdd');
  const { control, watch } = useFormContext<ProjectDetailsFormData>();
  const startDate = watch('startDate');

  const { field, fieldState } = useController({
    name: 'dueDate',
    control,
    rules: {
      validate: (value) =>
        validateDateOrder(value, startDate, 'due', {
          invalid: 'Invalid date format',
          outOfOrder: 'Due date cannot be before start date',
        }),
    },
  });

  return (
    <DateFormField
      id="dueDate"
      label={t('dueDateLabel')}
      error={fieldState.error?.message}
      inputProps={{ ...field, placeholder: t('dueDatePlaceholder') }}
    />
  );
};
