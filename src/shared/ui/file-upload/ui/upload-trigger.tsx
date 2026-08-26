import type { UploadTriggerProps } from '../model/types';

import { Box, Typography } from '@/shared/ui';

import { UploadIcon } from '@/shared/ui/icons';

import styles from './file-upload.module.scss';

export const UploadTrigger = ({
  handleTrigger,
  handleKeyDown,
  uploadLabel,
}: UploadTriggerProps) => {
  return (
    <Box
      onClick={handleTrigger}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={styles.emptyStateTrigger}
    >
      <Box className={styles.iconContainer}>
        <UploadIcon />
      </Box>

      <Typography as="span" className={styles.text}>
        {uploadLabel}
      </Typography>
    </Box>
  );
};
