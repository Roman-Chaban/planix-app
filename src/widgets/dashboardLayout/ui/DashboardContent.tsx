import type { FC } from 'react';

import { Box } from '@/shared/ui';

import styles from './styles.module.scss';

export const DashboardContent: FC = () => {
  return <Box className={styles.content}>Content</Box>;
};
