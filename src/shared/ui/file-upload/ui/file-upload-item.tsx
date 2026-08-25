import { Box, Typography } from '@/shared/ui';
import type { FileUploadItemProps } from '@/shared/ui/file-upload';
import { UploadIcon } from '@/shared/ui/icons';

import styles from './file-upload.module.scss';

export const FileUploadItem = ({
  handleTrigger,
  handleKeyDown,
  uploadPhotosLabel,
}: FileUploadItemProps) => {
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
