import { DashboardAnalytics } from '@/widgets/dashboard-analytics';
import { DashboardCards } from '@/widgets/dashboard-cards';
import { Header } from '@/widgets/header';
import { Box, PageWrapper } from '@/shared/ui';

import styles from './DashboardLayout.module.scss';

export const DashboardLayout = () => {
  return (
    <PageWrapper header={<Header title={'dashboard'} />}>
      <Box as="section" className={styles.dashboard}>
        <DashboardCards />
        <DashboardAnalytics />
      </Box>
    </PageWrapper>
  );
};
