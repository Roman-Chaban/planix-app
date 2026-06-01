'use client';

import { type ChangeEvent, type KeyboardEvent, useRef, useCallback } from 'react';

import type { UseFileUploadParams } from '@/shared/ui/file-upload';

export const useFileUpload = ({ onFileSelect }: UseFileUploadParams = {}) => {
  const uploadRef = useRef<HTMLInputElement>(null);

  const handleTrigger = useCallback(() => {
    uploadRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const fileList = event.target.files;
      if (!fileList || fileList.length === 0) return;

      const newFiles = Array.from(fileList);
      newFiles.forEach((file) => onFileSelect?.(file));
      event.target.value = '';
    },
    [onFileSelect],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleTrigger();
      }
    },
    [handleTrigger],
  );

  return {
    inputRef: uploadRef,
    handleTrigger,
    handleFileChange,
    handleKeyDown,
  };
};
