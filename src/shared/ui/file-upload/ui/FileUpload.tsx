'use client';

import type { FC } from 'react';

import { Box, Typography, FormField, FormLabel, Input } from '@/shared/ui';

import { useFileUpload, type FileUploadProps } from '@/shared/ui/file-upload';
import { UploadIcon } from '@/shared/ui/icons';

import { INPUT_TYPES } from '@/shared/ui/input';

import styles from './FileUpload.module.scss';

const { FILE } = INPUT_TYPES;

export const FileUpload: FC<FileUploadProps> = ({ label, uploadLabel, error }) => {
  const { inputId, handleFileChange, handleKeyDown } = useFileUpload({
    onFileSelect: (file) => {
      // TODO: Implement file upload logic here
      console.log(file);
    },
  });

  return (
    <FormField>
      {label && <FormLabel htmlFor={inputId}>{label}</FormLabel>}

      <Input
        id={inputId}
        type={FILE}
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
