import { DashboardAnalytics } from '@/widgets/dashboard-analytics/ui/DashboardAnalytics';
import { DashboardCards } from '@/widgets/dashboard-cards/ui/DashboardCards';
import { Header } from '@/widgets/header/ui/Header';
import { PageWrapper } from '@/shared/ui/page-wrapper/PageWrapper';

export const DashboardLayout = () => {
  return (
    <PageWrapper header={<Header title={'dashboard.headers.dashboard'} />}>
      <DashboardCards />
      <DashboardAnalytics />
    </PageWrapper>
  );
};
