import type { FC } from 'react';

import { Box, Typography } from '@/shared/ui';

import styles from './SettingsHeader.module.scss';

export type SettingsHeaderProps = {
  title: string;
};

export const SettingsHeader: FC<SettingsHeaderProps> = ({ title }) => {
  return (
    <Box className={styles.box}>
      <Typography as="h2" className={styles.title}>
        {title}
      </Typography>
    </Box>
  );
};
