import { Controller } from 'react-hook-form';

import type { ProjectDetailsSchema } from '@/features/project-create';
import { Box, FileUpload, FormDateField, Textarea } from '@/shared/ui';
import type { FormFieldRenderProps } from '@/shared/ui/form/form-fields';

import styles from '../ui/create-form.module.scss';

export const renderProjectDateRangeField = ({
  control,
  size,
}: FormFieldRenderProps<ProjectDetailsSchema>) => (
  <Box key="date-range" className={styles.row}>
    <Controller
      control={control}
      name="startDate"
      render={({ field, fieldState }) => (
        <FormDateField
          size={size}
          id="startDate"
          label="startDateLabel"
          placeholder="startDatePlaceholder"
          error={fieldState.error?.message}
          inputProps={{
            value: field.value ?? '',
            onChange: field.onChange,
            onBlur: field.onBlur,
            ref: field.ref,
            required: true,
          }}
        />
      )}
    />
    <Controller
      control={control}
      name="dueDate"
      render={({ field, fieldState }) => (
        <FormDateField
          size={size}
          id="dueDate"
          label="dueDateLabel"
          placeholder="dueDatePlaceholder"
          error={fieldState.error?.message}
          inputProps={{
            value: field.value ?? '',
            onChange: field.onChange,
            onBlur: field.onBlur,
            ref: field.ref,
            required: true,
          }}
        />
      )}
    />
  </Box>
);

export const renderProjectDescriptionField = ({
  control,
  t,
}: FormFieldRenderProps<ProjectDetailsSchema>) => (
  <Controller
    key="description"
    control={control}
    name="description"
    render={({ field, fieldState }) => (
      <Textarea
        {...field}
        error={fieldState.error?.message ? t(fieldState.error.message) : ''}
        label={t('descriptionLabel')}
        placeholder={t('descriptionPlaceholder')}
      />
    )}
  />
);

export const renderProjectFilesField = ({
  control,
  t,
}: FormFieldRenderProps<ProjectDetailsSchema>) => (
  <Controller
    key="files"
    control={control}
    name="files"
    defaultValue={[]}
    render={({ field, fieldState }) => (
      <FileUpload
        value={field.value ?? []}
        onChange={field.onChange}
        error={fieldState.error?.message ? t(fieldState.error.message) : ''}
        label={t('label')}
        uploadLabel={t('uploadLabel')}
        uploadPhotosLabel={t('uploadPhotosLabel')}
      />
    )}
  />
);
