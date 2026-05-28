import type { FC, KeyboardEvent } from 'react';

import { Box, Typography } from '@/shared/ui';
import { UploadIcon } from '@/shared/ui/icons';

import styles from './FileUpload.module.scss';

export type FileUploadItemProps = {
  handleTrigger: () => void;
  handleKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
  uploadPhotosLabel: string;
};

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
      <Typography className={styles.uploadCardText}>{uploadPhotosLabel}</Typography>
    </Box>
  );
};
