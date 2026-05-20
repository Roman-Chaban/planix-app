import { DashboardAnalytics } from '@/widgets/dashboard-analytics/ui/DashboardAnalytics';
import { DashboardCards } from '@/widgets/dashboard-cards/ui/DashboardCards';
import { Header } from '@/widgets/header/ui/Header';
import { sharedI18n } from '@/shared/lib/i18n/keys';
import { PageWrapper } from '@/shared/ui/page-wrapper/PageWrapper';

export const DashboardLayout = () => {
  return (
    <PageWrapper header={<Header title={sharedI18n.sidebar.dashboard} />}>
      <DashboardCards />
      <DashboardAnalytics />
    </PageWrapper>
  );
};
