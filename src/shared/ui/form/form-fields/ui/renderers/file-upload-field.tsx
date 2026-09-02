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
  const emptyValue: FileUploadValue = [];

  return (
    <Controller
      name={field.name}
      control={control}
      render={({ field: inputField, fieldState }) => {
        const errorText = fieldState.error?.message ? t(fieldState.error.message) : undefined;

        return (
          <FileUpload
            value={Array.isArray(inputField.value) ? inputField.value : emptyValue}
            onChange={inputField.onChange}
            error={errorText}
            label={t(field.label)}
            uploadLabel={t(field.placeholder ?? 'uploadLabel')}
            uploadPhotosLabel={t('uploadPhotosLabel')}
          />
        );
      }}
    />
  );
};
