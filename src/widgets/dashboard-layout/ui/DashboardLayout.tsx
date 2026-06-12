import { DashboardAnalytics } from '@/widgets/dashboard-analytics';
import { DashboardCards } from '@/widgets/dashboard-cards';
import { Header } from '@/widgets/header';
import { PageWrapper } from '@/shared/ui';

import styles from './DashboardLayout.module.scss';

export const DashboardLayout = () => {
  return (
    <PageWrapper
      header={<Header title={'dashboard'} />}
      sectionClassName={styles.dashboard}
    >
      <DashboardCards />
      <DashboardAnalytics />
    </PageWrapper>
  );
};
