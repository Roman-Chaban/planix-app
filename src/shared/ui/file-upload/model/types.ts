export type FileUploadProps = {
  value?: File[];
  onChange?: (files: File[]) => void;
  label?: string;
  uploadLabel?: string;
  uploadPhotosLabel: string;
  error?: string;
};

export type FileItemProps = {
  file: File;
  onRemove: () => void;
};
