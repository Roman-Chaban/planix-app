export const FILE_TYPES = {
  PDF: 'pdf',
  IMAGE: 'image',
} as const;

export type FileTypes = (typeof FILE_TYPES)[keyof typeof FILE_TYPES];

export const MAIN_FILE_ACCEPT = '.pdf,.doc,.docx,.xls,.xlsx';
export const PHOTO_FILE_ACCEPT = 'image/*';
