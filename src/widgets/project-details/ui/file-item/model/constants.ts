import type { FileConfiguration } from './types';

import { FILE_TYPES } from '@/shared/ui/file-upload';

import { PdfIcon, UploadIcon } from '@/shared/ui/icons';

const { PDF, IMAGE } = FILE_TYPES;

export const FILE_CONFIGURATIONS: FileConfiguration = {
  pdf: { icon: PdfIcon, type: PDF },
  png: { icon: UploadIcon, type: IMAGE },
  jpg: { icon: UploadIcon, type: IMAGE },
  jpeg: { icon: UploadIcon, type: IMAGE },
} as const;
