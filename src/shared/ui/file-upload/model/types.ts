import type { ProjectFile } from '@/entities/project';

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
