import type { PhotoUploadTriggerProps } from '../model/types';

import { Box, Typography } from '@/shared/ui';

import { UploadIcon } from '@/shared/ui/icons';

import styles from './file-upload.module.scss';

export const PhotoUploadTrigger = ({
  handleTrigger,
  handleKeyDown,
  uploadPhotosLabel,
}: PhotoUploadTriggerProps) => {
  return (
    <Box
      onClick={handleTrigger}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={styles.uploadCard}
    >
      <Box className={styles.iconContainer}>
        <UploadIcon width={20} height={20} />
      </Box>

      <Typography as="span" className={styles.uploadCardText}>
        {uploadPhotosLabel}
      </Typography>
    </Box>
  );
};
