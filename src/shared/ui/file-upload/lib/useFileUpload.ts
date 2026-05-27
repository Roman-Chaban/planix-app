import { type ChangeEvent, type KeyboardEvent, useId } from 'react';

import type { UseFileUploadParams } from '@/shared/ui/file-upload';

export const useFileUpload = ({ onFileSelect }: UseFileUploadParams = {}) => {
  const uploadId = useId();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    onFileSelect?.(file);

    event.target.value = '';
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLLabelElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();

    const input = document.getElementById(uploadId);

    if (input instanceof HTMLInputElement) {
      input.click();
    }
  };

  return {
    inputId: uploadId,
    handleFileChange,
    handleKeyDown,
  };
};
