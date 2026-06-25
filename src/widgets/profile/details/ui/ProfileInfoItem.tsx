import type { FC } from 'react';

import type { ProfileInfoItemProps } from '@/widgets/profile/details';
import { toDisplay } from '@/shared/lib';
import { Box, Typography } from '@/shared/ui';

import styles from './ProfileDetails.module.scss';

export const ProfileInfoItem: FC<ProfileInfoItemProps> = ({ label, value }) => {
  const displayValue =
    value instanceof Date
      ? toDisplay(value.toISOString())
      : toDisplay(String(value ?? ''));

  return (
    <Box className={styles.field}>
      <Typography as="span" className={styles.label}>
        {label}
      </Typography>
      <Typography as="span" className={styles.value}>
        {displayValue}
      </Typography>
    </Box>
  );
};
