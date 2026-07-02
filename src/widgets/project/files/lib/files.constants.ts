import type { FileConfiguration } from '../model/types';

import { PdfIcon, UploadIcon } from '@/shared/ui/icons';

export const FILE_CONFIGURATIONS: FileConfiguration = {
  pdf: { icon: PdfIcon, type: 'pdf' },
  png: { icon: UploadIcon, type: 'image' },
  jpg: { icon: UploadIcon, type: 'image' },
  jpeg: { icon: UploadIcon, type: 'image' },
};
