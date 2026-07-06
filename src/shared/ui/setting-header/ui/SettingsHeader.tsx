import type { SettingsHeaderProps } from '../model/types';

import { Box, Typography } from '@/shared/ui';

import styles from './SettingsHeader.module.scss';

export const SettingsHeader = ({ title }: SettingsHeaderProps) => {
  return (
    <Box className={styles.box}>
      <Typography as="h2" className={styles.title}>
        {title}
      </Typography>
    </Box>
  );
};
