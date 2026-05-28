export type FileUploadProps = {
  label?: string;
  uploadLabel?: string;
  uploadPhotosLabel: string;
  error?: string;
};

export type FileItemProps = {
  file: File;
  onRemove: () => void;
};
