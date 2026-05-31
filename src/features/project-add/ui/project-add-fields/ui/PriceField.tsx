'use client';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ProjectDetailsFormData } from '@/features/project-add/ui/add-project-details';

import { FormInputField } from '@/shared/ui';
import { PriceIcon } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

const { TEXT } = INPUT_TYPES;

export const PriceField = () => {
  const { t } = useTranslation('projectAdd');

  const { control } = useFormContext<ProjectDetailsFormData>();

  const { field } = useController({
    name: 'price',
    control,
  });

  return (
    <FormInputField
      id="price"
      label={t('priceLabel')}
      startIcon={<PriceIcon />}
      inputProps={{
        ...field,
        type: TEXT,
        inputMode: 'decimal',
        placeholder: t('pricePlaceholder'),
        onChange: (event) => {
          const value = event.target.value.replace(/[^0-9.]/g, '');
          field.onChange(value === '' ? '' : Number(value));
        },
      }}
    />
  );
};
