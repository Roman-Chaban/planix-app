'use client';

import { useState, useCallback, type FC } from 'react';

import { Box, Typography, FormField, FormLabel, Input } from '@/shared/ui';
import {
  FileItem,
  FileUploadItem,
  useFileUpload,
  type FileUploadProps,
} from '@/shared/ui/file-upload';
import { UploadIcon } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

import styles from './FileUpload.module.scss';

const { FILE } = INPUT_TYPES;

export const FileUpload: FC<FileUploadProps> = ({
  label,
  uploadLabel,
  uploadPhotosLabel,
  error,
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const { inputRef, handleTrigger, handleFileChange, handleKeyDown } = useFileUpload({
    onFileSelect: (file) => setFiles((prev) => [...prev, file]),
  });

  const handleRemoveFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const hasFiles = files.length > 0;

  return (
    <FormField>
      {label && <FormLabel onClick={handleTrigger}>{label}</FormLabel>}

      <Input
        ref={inputRef}
        type={FILE}
        className={styles.hiddenInput}
        onChange={handleFileChange}
        aria-invalid={!!error}
        multiple
      />

      <Box className={styles.mainWrapper}>
        {!hasFiles ? (
          <Box
            onClick={handleTrigger}
            onKeyDown={handleKeyDown}
            className={styles.emptyStateTrigger}
          >
            <Box className={styles.iconContainer}>
              <UploadIcon />
            </Box>
            <Typography className={styles.text}>{uploadLabel}</Typography>
          </Box>
        ) : (
          <Box className={styles.filesGrid}>
            <FileUploadItem
              handleTrigger={handleTrigger}
              handleKeyDown={handleKeyDown}
              uploadPhotosLabel={uploadPhotosLabel}
            />

            {files.map((file, index) => (
              <FileItem
                key={`${file.name}-${index}`}
                file={file}
                onRemove={() => handleRemoveFile(index)}
              />
            ))}
          </Box>
        )}
      </Box>
    </FormField>
  );
};
