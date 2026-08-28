'use client';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ProjectDetailsSchema } from '@/features/project-create';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { Textarea } from '@/shared/ui';

export const DescriptionField = () => {
  const { t } = useTranslation(NS.PROJECT_ADD);

  const { control } = useFormContext<ProjectDetailsSchema>();

  const { field, fieldState } = useController({
    name: 'description',
    control,
  });

  return (
    <Textarea
      {...field}
      error={t(fieldState.error?.message ?? '')}
      label={t('descriptionLabel')}
      placeholder={t('descriptionPlaceholder')}
    />
  );
};
