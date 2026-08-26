import type { KeyboardEvent } from 'react';

import type { ProjectFile } from '@/entities/projects';

export type FileUploadProps = {
  value: (File | ProjectFile)[];
  onChange?: (files: (File | ProjectFile)[]) => void;
  label?: string;
  uploadLabel?: string;
  uploadPhotosLabel: string;
  error?: string;
};

export type FileItemProps = {
  file: File | ProjectFile;
  onRemove: () => void;
};

export type UseFileUploadParams = {
  onFileSelect?: (file: File | ProjectFile) => void;
};

export type FileUploadItemProps = {
  handleTrigger: () => void;
  handleKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
  uploadPhotosLabel: string;
};
