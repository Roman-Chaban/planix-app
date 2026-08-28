import type { FormFieldSizes } from '../../form/form-field';

import type { ProjectFile } from '@/entities/projects';

export type FileUploadItem = ProjectFile | File;
export type FileUploadValue = FileUploadItem[];

export type FileUploadProps = {
  value: FileUploadValue;
  label?: string;
  uploadLabel?: string;
  uploadPhotosLabel: string;
  error?: string;
  size?: FormFieldSizes;
  onChange: (files: FileUploadValue) => void;
};

export type FilePreviewProps = {
  file: FileUploadItem;
  onRemove: () => void;
};

export type UseFileUploadParams = {
  onFilesSelect?: (files: File[]) => void;
};

type UploadTriggerHandlers = {
  handleTrigger: () => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
};

export type PhotoUploadTriggerProps = UploadTriggerHandlers & {
  uploadPhotosLabel: string;
};

export type UploadTriggerProps = UploadTriggerHandlers & {
  uploadLabel: string;
};
