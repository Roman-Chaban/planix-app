import { DashboardAnalytics } from '@/widgets/dashboard/ui/DashboardAnalytics/DashboardAnalytics';
import { DashboardCards } from '@/widgets/dashboard/ui/DashboardCards';
import { Box } from '@/shared/ui';

import styles from './styles.module.scss';

export const DashboardContent = () => {
  return (
    <Box className={styles.content}>
      <DashboardCards />
      <DashboardAnalytics />
    </Box>
  );
};
