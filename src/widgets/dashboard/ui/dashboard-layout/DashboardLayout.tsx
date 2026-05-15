import { DashboardAnalytics } from '@/widgets/dashboard/ui/dashboard-analytics/ui/DashboardAnalytics';
import { DashboardCards } from '@/widgets/dashboard/ui/dashboard-cards/ui/DashboardCards';
import { Header } from '@/widgets/header/ui/Header';
import { PageWrapper } from '@/widgets/page-wrapper/ui/PageWrapper';

export const DashboardLayout = () => {
  return (
    <PageWrapper header={<Header title={'DashboardHeaders.dashboard'} />}>
      <DashboardCards />
      <DashboardAnalytics />
    </PageWrapper>
  );
};
