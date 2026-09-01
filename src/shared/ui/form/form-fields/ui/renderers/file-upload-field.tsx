'use client';

import type { FileUploadFieldProps } from '../../model/types';

import { Controller, type FieldValues } from 'react-hook-form';

import { FileUpload } from '@/shared/ui';

export function FileUploadField<T extends FieldValues>({
  field,
  control,
  t,
}: FileUploadFieldProps<T>) {
  const fileField = field;

  return (
    <Controller
      name={fileField.name}
      control={control}
      defaultValue={[] as never}
      render={({ field: inputField, fieldState }) => (
        <FileUpload
          value={Array.isArray(inputField.value) ? inputField.value : []}
          onChange={inputField.onChange}
          error={fieldState.error?.message ? t(fieldState.error.message) : ''}
          label={t(fileField.label)}
          uploadLabel={t(fileField.placeholder ?? 'uploadLabel')}
          uploadPhotosLabel={t('uploadPhotosLabel')}
        />
      )}
    />
  );
}
