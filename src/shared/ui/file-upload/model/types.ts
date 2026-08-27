import type { FormFieldSize } from '../../input/lib/constants';

import type { ProjectFile } from '@/entities/projects';

export type FileUploadItem = ProjectFile | File;

export type FileUploadValue = FileUploadItem[];

export type FileUploadProps = {
  value: FileUploadValue;
  onChange: (files: FileUploadValue) => void;
  label?: string;
  uploadLabel?: string;
  uploadPhotosLabel: string;
  error?: string;
  size?: FormFieldSize;
};

export type FilePreviewProps = {
  file: FileUploadItem;
  onRemove: () => void;
};

export type UseFileUploadParams = {
  onFilesSelect?: (files: File[]) => void;
};

export type PhotoUploadTriggerProps = {
  handleTrigger: () => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
  uploadPhotosLabel: string;
};

export type UploadTriggerProps = {
  handleTrigger: () => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
  uploadLabel: string;
};
