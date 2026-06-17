'use client';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ProjectDetailsSchema } from '@/features/project-add';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';

import { DateFormField } from './DateFormField';

export const DueDateField = () => {
  const { t } = useTranslation(NS.PROJECT_ADD);
  const { control } = useFormContext<ProjectDetailsSchema>();

  const { field, fieldState } = useController({
    name: 'dueDate',
    control,
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
