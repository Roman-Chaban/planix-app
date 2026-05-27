'use client';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ProjectDetailsFormData } from '@/features/project-add/ui/add-project-details';

import { FormInputField } from '@/shared/ui';
import { ProjectNameIcon } from '@/shared/ui/icons';

export const ProjectNameField = () => {
  const { t } = useTranslation('projectDetails');

  const { control } = useFormContext<ProjectDetailsFormData>();

  const { field, fieldState } = useController({
    name: 'projectName',
    control,
  });

  return (
    <FormInputField
      id="projectName"
      label={t('projectNameLabel')}
      error={fieldState.error?.message}
      startIcon={<ProjectNameIcon />}
      inputProps={{
        ...field,
        placeholder: t('projectNamePlaceholder'),
      }}
    />
  );
};
