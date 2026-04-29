import type { FC } from 'react';

import { DashboardCards } from '@/widgets/dashboardLayout/ui/DashboardCards';
import { Box } from '@/shared/ui';

import styles from './styles.module.scss';

export const DashboardContent: FC = () => {
  return (
    <Box className={styles.content}>
      <DashboardCards />
    </Box>
  );
};
