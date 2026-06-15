'use client';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ProjectDetailsSchema } from '@/features/project-add/ui/add-project-details';

import { FormField } from '@/shared/ui';
import { PriceIcon } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

const { TEXT } = INPUT_TYPES;

export const PriceField = () => {
  const { t } = useTranslation('projectAdd');

  const { control } = useFormContext<ProjectDetailsSchema>();

  const { field, fieldState } = useController({
    name: 'price',
    control,
  });

  return (
    <FormField
      id="price"
      label={t('priceLabel')}
      startIcon={<PriceIcon />}
      error={fieldState.error?.message}
      filedProps={{
        ...field,
        type: TEXT,
        inputMode: 'decimal',
        placeholder: t('pricePlaceholder'),
        onChange: (event) => {
          const value = event.target.value.replace(/[^0-9.]/g, '');
          field.onChange(value);
        },
      }}
    />
  );
};
