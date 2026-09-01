'use client';

import type { FileUploadFieldProps } from '../../model/types';

import { Controller, type FieldValues } from 'react-hook-form';

import { FileUpload } from '@/shared/ui';
import type { FileUploadValue } from '@/shared/ui/file-upload/model/types';

export const FileUploadField = <T extends FieldValues>({
  field,
  control,
  t,
}: FileUploadFieldProps<T>) => {
  const fileField = field;
  const emptyValue: FileUploadValue = [];

  return (
    <Controller
      name={fileField.name}
      control={control}
      render={({ field: inputField, fieldState }) => (
        <FileUpload
          value={Array.isArray(inputField.value) ? inputField.value : emptyValue}
          onChange={inputField.onChange}
          error={fieldState.error?.message ? t(fieldState.error.message) : ''}
          label={t(fileField.label)}
          uploadLabel={t(fileField.placeholder ?? 'uploadLabel')}
          uploadPhotosLabel={t('uploadPhotosLabel')}
        />
      )}
    />
  );
};
