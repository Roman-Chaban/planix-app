import { DashboardAnalytics } from '@/widgets/dashboardLayout/ui/DashboardAnalytics';
import { DashboardCards } from '@/widgets/dashboardLayout/ui/DashboardCards';
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
