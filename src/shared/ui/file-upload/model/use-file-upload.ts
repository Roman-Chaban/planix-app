'use client';

import type { UseFileUploadParams } from './types';

import { useCallback, useRef, type ChangeEvent } from 'react';

export const useFileUpload = ({ onFilesSelect }: UseFileUploadParams = {}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const openFileDialog = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files ?? []);

      if (files.length === 0) {
        return;
      }

      onFilesSelect?.(files);

      event.target.value = '';
    },
    [onFilesSelect],
  );

  return {
    inputRef,
    openFileDialog,
    handleFileChange,
  };
};
