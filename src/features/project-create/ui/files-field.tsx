'use client';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ProjectDetailsSchema } from '@/features/project-create';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { FileUpload } from '@/shared/ui';

export const FilesField = () => {
  const { t } = useTranslation(NS.PROJECT_ADD);
  const { control } = useFormContext<ProjectDetailsSchema>();

  const { field, fieldState } = useController({
    name: 'files',
    control,
    defaultValue: [],
  });

  return (
    <FileUpload
      value={field.value}
      onChange={field.onChange}
      error={t(fieldState.error?.message ?? '')}
      label={t('label')}
      uploadLabel={t('uploadLabel')}
      uploadPhotosLabel={t('uploadPhotosLabel')}
    />
  );
};
