import type { KeyboardEvent } from 'react';

import type { ProjectFile } from '@/entities/project';

export type UseFileUploadParams = {
  onFileSelect?: (file: File | ProjectFile) => void;
};

export type FileUploadItemProps = {
  handleTrigger: () => void;
  handleKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
  uploadPhotosLabel: string;
};
