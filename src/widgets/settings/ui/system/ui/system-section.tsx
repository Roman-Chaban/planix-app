import type { SystemSectionProps } from '../model/types';

import { Box, SettingsHeader } from '@/shared/ui';

import styles from './system.module.scss';

export const SystemSection = ({ title, children }: SystemSectionProps) => {
  return (
    <Box className={styles.systemContainer}>
      <SettingsHeader title={title} />
      {children}
    </Box>
  );
};
