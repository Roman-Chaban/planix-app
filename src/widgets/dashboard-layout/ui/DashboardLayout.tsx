import { DashboardAnalytics } from '@/widgets/dashboard-analytics';
import { DashboardCards } from '@/widgets/dashboard-cards';
import { Header } from '@/widgets/header';
import { sharedI18n } from '@/shared/lib/i18n';
import { PageWrapper } from '@/shared/ui';

export const DashboardLayout = () => {
  return (
    <PageWrapper header={<Header title={sharedI18n.sidebar.dashboard} />}>
      <DashboardCards />
      <DashboardAnalytics />
    </PageWrapper>
  );
};
