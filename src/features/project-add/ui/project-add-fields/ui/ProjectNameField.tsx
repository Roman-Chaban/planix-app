'use client';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ProjectDetailsFormData } from '@/features/project-add/ui/add-project-details';

import { FormInputField } from '@/shared/ui';
import { ProjectNameIcon } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

const { TEXT } = INPUT_TYPES;

export const ProjectNameField = () => {
  const { t } = useTranslation('projectAdd');

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
        type: TEXT,
        placeholder: t('projectNamePlaceholder'),
      }}
    />
  );
};
