'use client';

import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { type ProjectDetailsFormProps, DateFormField } from '@/features/project';
import { useProjectDetailsForm } from '@/features/project/lib/useProjectDetailsForm';
import { Box, FileUpload, Textarea, FormInputField } from '@/shared/ui';
import { ClientIcon, PlatformIcon, PriceIcon, ProjectNameIcon } from '@/shared/ui/icons';

import styles from './ProjectDetails.module.scss';

export const ProjectDetailsForm = ({ onSubmit, defaultValues }: ProjectDetailsFormProps) => {
  const { t } = useTranslation('projectDetails');

  const { control, handleSubmit, formatDateDisplay, startDateValue, dueDateValue } =
    useProjectDetailsForm(defaultValues);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit || (() => {}))}>
      <Controller
        name="projectName"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FormInputField
            id="projectName"
            label={t('projectNameLabel')}
            error={error?.message}
            startIcon={<ProjectNameIcon />}
            inputProps={{
              ...field,
              placeholder: t('projectNamePlaceholder'),
            }}
          />
        )}
      />

      <Controller
        name="clientName"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FormInputField
            id="clientName"
            label={t('clientNameLabel')}
            error={error?.message}
            startIcon={<ClientIcon width={20} height={20} />}
            inputProps={{
              ...field,
              placeholder: t('clientNamePlaceholder'),
            }}
          />
        )}
      />

      <Box className={styles.formWrapper}>
        <Controller
          name="startDate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateFormField
              id="startDate"
              label={t('startDateLabel')}
              inputProps={{
                value: value || '',
                onChange: (event) => onChange(event.target.value),
                max: dueDateValue || undefined,
              }}
              valueDisplay={formatDateDisplay(value)}
            />
          )}
        />

        <Controller
          name="dueDate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateFormField
              id="dueDate"
              label={t('dueDateLabel')}
              inputProps={{
                value: value || '',
                onChange: (event) => onChange(event.target.value),
                min: startDateValue || undefined,
              }}
              valueDisplay={formatDateDisplay(value)}
            />
          )}
        />
      </Box>

      <Box className={styles.formWrapper}>
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <FormInputField
              id="price"
              label={t('priceLabel')}
              startIcon={<PriceIcon />}
              inputProps={{
                ...field,
                type: 'number',
                placeholder: t('pricePlaceholder'),
                onChange: (event) =>
                  field.onChange(event.target.value === '' ? '' : Number(event.target.value)),
              }}
            />
          )}
        />

        <Controller
          name="platform"
          control={control}
          render={({ field }) => (
            <FormInputField
              id="platform"
              label={t('platformLabel')}
              startIcon={<PlatformIcon />}
              inputProps={{
                ...field,
                placeholder: t('platformPlaceholder'),
              }}
            />
          )}
        />
      </Box>

      <FileUpload label={t('label')} uploadLabel={t('labelUpload')} />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Textarea
            {...field}
            label={t('descriptionLabel')}
            placeholder={t('descriptionPlaceholder')}
            textareaClassName={styles.textarea}
            labelClassName={styles.descriptionLabel}
          />
        )}
      />
    </form>
  );
};
