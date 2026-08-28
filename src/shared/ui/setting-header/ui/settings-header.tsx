import { Box, Typography } from '@/shared/ui';

import styles from './settings-header.module.scss';

export type SettingsHeaderProps = {
  title: string;
};

export const SettingsHeader = ({ title }: SettingsHeaderProps) => {
  return (
    <Box className={styles.box}>
      <Typography as="h2" className={styles.title}>
        {title}
      </Typography>
    </Box>
  );
};
