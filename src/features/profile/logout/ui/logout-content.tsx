import type { LogoutContentProps } from '../model/types';

import { Box, Typography } from '@/shared/ui';

import styles from './logout-modal.module.scss';

export const LogoutContent = ({ title, subtitle }: LogoutContentProps) => {
  return (
    <Box className={styles.logoutContent}>
      <Typography as="h5" className={styles.contentTitle}>
        {title}
      </Typography>
      <Typography as="p" className={styles.contentSubtitle}>
        {subtitle}
      </Typography>
    </Box>
  );
};
