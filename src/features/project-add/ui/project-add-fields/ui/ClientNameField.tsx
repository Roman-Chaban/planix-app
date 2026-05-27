'use client';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ProjectDetailsFormData } from '@/features/project-add';

import { FormInputField } from '@/shared/ui';
import { ClientIcon } from '@/shared/ui/icons';

export const ClientNameField = () => {
  const { t } = useTranslation('projectDetails');

  const { control } = useFormContext<ProjectDetailsFormData>();

  const { field, fieldState } = useController({
    name: 'clientName',
    control,
  });

  return (
    <FormInputField
      id="clientName"
      label={t('clientNameLabel')}
      error={fieldState.error?.message}
      startIcon={<ClientIcon width={20} height={20} />}
      inputProps={{
        ...field,
        placeholder: t('clientNamePlaceholder'),
      }}
    />
  );
};
