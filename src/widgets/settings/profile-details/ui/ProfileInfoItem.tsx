import type { ProfileInfoItemProps } from '../model/types';

import { Box, Typography } from '@/shared/ui';

import styles from './ProfileDetails.module.scss';

export const ProfileInfoItem = ({ label, value, children }: ProfileInfoItemProps) => {
  return (
    <Box className={styles.field}>
      <Typography as="span" className={styles.label}>
        {label}
      </Typography>
      <Typography as="span" className={styles.value}>
        {value}
      </Typography>

      {children}
    </Box>
  );
};
