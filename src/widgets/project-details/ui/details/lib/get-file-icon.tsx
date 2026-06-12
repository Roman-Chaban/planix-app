import { FILE_CONFIGURATIONS } from '@/widgets/project-details/ui/details';
import { UploadIcon } from '@/shared/ui/icons';

export const getFileIcon = (fileName: string) => {
  if (!fileName) {
    return { icon: <UploadIcon />, type: 'default', ext: '' };
  }

  const ext = fileName.split('.').pop()?.toLowerCase() || '';

  const config = FILE_CONFIGURATIONS[ext] || {
    icon: <UploadIcon />,
    type: 'default',
  };
  return { ...config, ext };
};
