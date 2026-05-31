'use client';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ProjectDetailsFormData } from '@/features/project-add';

import { FormInputField } from '@/shared/ui';
import { PlatformIcon } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input/model/constants';

const { TEXT } = INPUT_TYPES;

export const PlatformField = () => {
  const { t } = useTranslation('projectAdd');

  const { control } = useFormContext<ProjectDetailsFormData>();

  const { field } = useController({
    name: 'platform',
    control,
  });

  return (
    <FormInputField
      id="platform"
      label={t('platformLabel')}
      startIcon={<PlatformIcon />}
      inputProps={{
        ...field,
        type: TEXT,
        placeholder: t('platformPlaceholder'),
      }}
    />
  );
};
