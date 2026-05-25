import { DashboardAnalytics } from '@/widgets/dashboard-analytics';
import { DashboardCards } from '@/widgets/dashboard-cards';
import { Header } from '@/widgets/header';
import { PageWrapper } from '@/shared/ui';

export const DashboardLayout = () => {
  return (
    <PageWrapper header={<Header title={'dashboard'} />}>
      <DashboardCards />
      <DashboardAnalytics />
    </PageWrapper>
  );
};
