'use client';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ProjectDetailsFormData } from '@/features/project-add';
import { FileUpload } from '@/shared/ui';

export const FilesField = () => {
  const { t } = useTranslation('projectAdd');
  const { control } = useFormContext<ProjectDetailsFormData>();

  const { field, fieldState } = useController({
    name: 'files',
    control,
    defaultValue: [],
  });

  return (
    <FileUpload
      value={field.value}
      onChange={field.onChange}
      error={fieldState.error?.message}
      label={t('label')}
      uploadLabel={t('uploadLabel')}
      uploadPhotosLabel={t('uploadPhotosLabel')}
    />
  );
};
