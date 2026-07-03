import type { SettingsHeaderProps } from '../model/types';

import type { FC } from 'react';

import { Box, Typography } from '@/shared/ui';

import styles from './SettingsHeader.module.scss';

export const SettingsHeader: FC<SettingsHeaderProps> = ({ title }) => {
  return (
    <Box className={styles.box}>
      <Typography as="h2" className={styles.title}>
        {title}
      </Typography>
    </Box>
  );
};
