'use client';

import type { FC } from 'react';

import { Box, Typography, FormField, FormLabel } from '@/shared/ui';

import type { FileUploadProps } from '@/shared/ui/file-upload';
import { useFileUpload } from '@/shared/ui/file-upload/lib/useFileUpload';
import { UploadIcon } from '@/shared/ui/icons';

import styles from './FileUpload.module.scss';

export const FileUpload: FC<FileUploadProps> = ({ label, uploadLabel, error }) => {
  const { inputId, handleFileChange, handleKeyDown } = useFileUpload({
    onFileSelect: (file) => {
      console.log(file);
    },
  });

  return (
    <FormField>
      {label && <FormLabel htmlFor={inputId}>{label}</FormLabel>}

      <input
        id={inputId}
        type="file"
        className={styles.hiddenInput}
        onChange={handleFileChange}
        aria-invalid={!!error}
      />

      <Box
        as="label"
        htmlFor={inputId}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className={styles.clickableWrapper}
      >
        <Box className={styles.iconContainer}>
          <UploadIcon />
        </Box>

        <Typography as="span" className={styles.text}>
          {uploadLabel}
        </Typography>
      </Box>
    </FormField>
  );
};
