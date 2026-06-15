'use client';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ProjectDetailsFormData } from '@/features/project-add';

import { FormField } from '@/shared/ui';
import { ClientIcon } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

const { TEXT } = INPUT_TYPES;

export const ClientNameField = () => {
  const { t } = useTranslation('projectAdd');

  const { control } = useFormContext<ProjectDetailsFormData>();

  const { field, fieldState } = useController({
    name: 'clientName',
    control,
  });

  return (
    <FormField
      id="clientName"
      label={t('clientNameLabel')}
      error={fieldState.error?.message}
      startIcon={<ClientIcon width={20} height={20} />}
      filedProps={{
        ...field,
        type: TEXT,
        placeholder: t('clientNamePlaceholder'),
      }}
    />
  );
};
