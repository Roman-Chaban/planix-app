'use client';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ProjectDetailsFormData } from '@/features/project';

import { Textarea } from '@/shared/ui';

import styles from './FormField.module.scss';

export const DescriptionField = () => {
  const { t } = useTranslation('projectDetails');

  const { control } = useFormContext<ProjectDetailsFormData>();

  const { field } = useController({
    name: 'description',
    control,
  });

  return (
    <Textarea
      {...field}
      label={t('descriptionLabel')}
      placeholder={t('descriptionPlaceholder')}
      textareaClassName={styles.textarea}
      labelClassName={styles.descriptionLabel}
    />
  );
};
