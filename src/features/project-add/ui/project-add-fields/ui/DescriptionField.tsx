'use client';

import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { ProjectDetailsSchema } from '@/features/project-add';

import { buildClassName } from '@/shared/lib';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { Textarea } from '@/shared/ui';

import styles from './FormField.module.scss';

export const DescriptionField = () => {
  const { t } = useTranslation(NS.PROJECT_ADD);

  const { control } = useFormContext<ProjectDetailsSchema>();

  const { field, fieldState } = useController({
    name: 'description',
    control,
  });

  return (
    <Textarea
      tabIndex={0}
      {...field}
      error={t(fieldState.error?.message ?? '')}
      label={t('descriptionLabel')}
      placeholder={t('descriptionPlaceholder')}
      textareaClassName={buildClassName(styles.textarea, {
        [styles.errorTextarea]: !!fieldState.error,
      })}
      labelClassName={buildClassName(styles.descriptionLabel, {
        [styles.errorLabel]: !!fieldState.error,
      })}
    />
  );
};
