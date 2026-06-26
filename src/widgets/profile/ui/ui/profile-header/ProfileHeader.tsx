import type { FC } from 'react';

import { Box, Typography } from '@/shared/ui';

import styles from './ProfileHeader.module.scss';

export type ProfileHeaderProps = {
  title: string;
};

export const ProfileHeader: FC<ProfileHeaderProps> = ({ title }) => {
  return (
    <Box className={styles.box}>
      <Typography as="h2" className={styles.title}>
        {title}
      </Typography>
    </Box>
  );
};
