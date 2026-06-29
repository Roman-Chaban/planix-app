import { DashboardAnalytics, DashboardCards } from '@/widgets/dashboard';
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
