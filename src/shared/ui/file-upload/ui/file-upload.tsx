'use client';

import { useCallback, useId } from 'react';

import { buildClassName } from '@/shared/lib';
import { Box, FormError, FormField } from '@/shared/ui';
import { INPUT_TYPES, INPUT_VARIANTS } from '@/shared/ui/input';

import {
  FilePreview,
  PhotoUploadTrigger,
  UploadTrigger,
  useFileUpload,
  type FileUploadProps,
} from '../index';

import { MAIN_FILE_ACCEPT, PHOTO_FILE_ACCEPT } from '../model/constants';

import styles from './file-upload.module.scss';

const { FILE } = INPUT_TYPES;
const { NO_BORDER } = INPUT_VARIANTS;

export const FileUpload = ({
  value,
  onChange,
  label,
  uploadLabel,
  uploadPhotosLabel,
  error,
}: FileUploadProps) => {
  const inputId = useId();

  const hasFiles = value.length > 0;

  const { inputRef, openFileDialog, handleFileChange } = useFileUpload({
    onFilesSelect: (files) => {
      onChange([...value, ...files]);
    },
  });

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openFileDialog();
      }
    },
    [openFileDialog],
  );

  const handleRemoveFile = useCallback(
    (fileIndex: number) => {
      onChange(value.filter((_, index) => index !== fileIndex));
    },
    [onChange, value],
  );

  return (
    <FormField
      id={inputId}
      label={label}
      variant={NO_BORDER}
      inputRef={inputRef}
      inputProps={{
        type: FILE,
        multiple: hasFiles,
        accept: hasFiles ? PHOTO_FILE_ACCEPT : MAIN_FILE_ACCEPT,
        onChange: handleFileChange,
        'aria-invalid': Boolean(error),
        className: styles.hiddenInput,
      }}
    >
      <Box
        tabIndex={0}
        className={buildClassName(styles.mainWrapper, {
          [styles.error]: Boolean(error),
        })}
      >
        {!hasFiles ? (
          <UploadTrigger
            handleTrigger={openFileDialog}
            handleKeyDown={handleKeyDown}
            uploadLabel={uploadLabel ?? ''}
          />
        ) : (
          <Box className={styles.filesGrid}>
            <PhotoUploadTrigger
              handleTrigger={openFileDialog}
              handleKeyDown={handleKeyDown}
              uploadPhotosLabel={uploadPhotosLabel}
            />

            {value.map((file, index) => (
              <FilePreview
                key={`${file.name}-${index}`}
                file={file}
                onRemove={() => handleRemoveFile(index)}
              />
            ))}
          </Box>
        )}
      </Box>

      <FormError error={error ?? ''} />
    </FormField>
  );
};
