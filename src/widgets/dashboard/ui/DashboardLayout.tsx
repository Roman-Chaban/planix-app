import { DashboardAnalytics } from '@/widgets/dashboard/ui/DashboardAnalytics/ui/DashboardAnalytics';
import { DashboardCards } from '@/widgets/dashboard/ui/DashboardCards/ui/DashboardCards';
import { Header, PageWrapper } from '@/shared/ui';

export const DashboardLayout = () => {
  return (
    <PageWrapper header={<Header title={'DashboardHeaders.dashboard'} />}>
      <DashboardCards />
      <DashboardAnalytics />
    </PageWrapper>
  );
};
