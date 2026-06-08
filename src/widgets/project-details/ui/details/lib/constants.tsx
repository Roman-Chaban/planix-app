import type { FileConfiguration } from '@/widgets/project-details/ui/details';
import { PdfIcon, UploadIcon } from '@/shared/ui/icons';

export const FILE_CONFIGURATIONS: FileConfiguration = {
  pdf: { icon: <PdfIcon />, type: 'pdf' },
  png: { icon: <UploadIcon />, type: 'image' },
  jpg: { icon: <UploadIcon />, type: 'image' },
  jpeg: { icon: <UploadIcon />, type: 'image' },
};
