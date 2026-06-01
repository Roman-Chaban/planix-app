import type { KeyboardEvent } from 'react';

export type UseFileUploadParams = {
  onFileSelect?: (file: File) => void;
};

export type FileUploadItemProps = {
  handleTrigger: () => void;
  handleKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
  uploadPhotosLabel: string;
};
