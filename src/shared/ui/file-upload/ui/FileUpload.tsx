'use client';

import { useCallback, useId, type FC } from 'react';

import { buildClassName } from '@/shared/lib';
import { Box, Typography, FormField, FormError } from '@/shared/ui';
import {
  FileItem,
  FileUploadItem,
  useFileUpload,
  type FileUploadProps,
} from '@/shared/ui/file-upload';
import { UploadIcon } from '@/shared/ui/icons';
import { INPUT_TYPES, INPUT_VARIANTS } from '@/shared/ui/input';

import styles from './FileUpload.module.scss';

const { FILE } = INPUT_TYPES;
const { NO_BORDER } = INPUT_VARIANTS;

export const FileUpload: FC<FileUploadProps> = ({
  value = [],
  onChange,
  label,
  uploadLabel,
  uploadPhotosLabel,
  error,
}) => {
  const uploadId = useId();

  const { handleTrigger, handleFileChange, handleKeyDown, inputRef } =
    useFileUpload({
      onFileSelect: (file) => {
        onChange?.([...value, file]);
      },
    });

  const handleRemoveFile = useCallback(
    (index: number) => {
      onChange?.(value.filter((_, i) => i !== index));
    },
    [onChange, value],
  );

  const hasFiles = value.length > 0;

  return (
    <FormField
      id={uploadId}
      label={label}
      variant={NO_BORDER}
      inputRef={inputRef}
      inputProps={{
        type: FILE,
        multiple: true,
        onChange: handleFileChange,
        'aria-invalid': !!error,
        className: styles.hiddenInput,
      }}
    >
      <Box
        tabIndex={0}
        className={buildClassName(styles.mainWrapper, {
          [styles.error]: !!error,
        })}
      >
        {!hasFiles ? (
          <Box
            onClick={handleTrigger}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className={styles.emptyStateTrigger}
          >
            <Box className={styles.iconContainer}>
              <UploadIcon />
            </Box>

            <Typography as="span" className={styles.text}>
              {uploadLabel}
            </Typography>
          </Box>
        ) : (
          <Box className={styles.filesGrid}>
            <FileUploadItem
              handleTrigger={handleTrigger}
              handleKeyDown={handleKeyDown}
              uploadPhotosLabel={uploadPhotosLabel}
            />

            {value.map((file, index) => (
              <FileItem
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
