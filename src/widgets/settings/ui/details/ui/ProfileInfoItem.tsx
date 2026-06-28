import type { ProfileInfoItemProps } from '../model/types';

import type { FC } from 'react';

import { Box, Typography } from '@/shared/ui';

import styles from './ProfileDetails.module.scss';

export const ProfileInfoItem: FC<ProfileInfoItemProps> = ({ label, value }) => {
  return (
    <Box className={styles.field}>
      <Typography as="span" className={styles.label}>
        {label}
      </Typography>
      <Typography as="span" className={styles.value}>
        {value}
      </Typography>
    </Box>
  );
};
