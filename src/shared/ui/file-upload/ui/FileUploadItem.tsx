import type { FC } from 'react';

import { Box, Typography } from '@/shared/ui';
import type { FileUploadItemProps } from '@/shared/ui/file-upload';
import { UploadIcon } from '@/shared/ui/icons';

import styles from './FileUpload.module.scss';

export const FileUploadItem: FC<FileUploadItemProps> = ({
  handleTrigger,
  handleKeyDown,
  uploadPhotosLabel,
}) => {
  return (
    <Box onClick={handleTrigger} onKeyDown={handleKeyDown} className={styles.uploadCard}>
      <Box className={styles.iconContainer}>
        <UploadIcon width={20} height={20} />
      </Box>
      <Typography as="span" className={styles.uploadCardText}>
        {uploadPhotosLabel}
      </Typography>
    </Box>
  );
};
