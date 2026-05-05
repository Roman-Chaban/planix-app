import type { DashboardAnalyticsHeaderList } from '@/widgets/dashboard/ui/DashboardAnalytics/model/types';
import { DashboardAnalyticsRevenue } from '@/widgets/dashboard/ui/DashboardAnalytics/ui/DashboardAnalyticsRevenue';

export const dashboardHeaderTitles: DashboardAnalyticsHeaderList = [
  {
    id: '1',
    title: 'DashboardAnalytics.Header.revenueTitle',
    variant: 'primary',
    content: <DashboardAnalyticsRevenue />,
  },
  {
    id: '2',
    title: 'DashboardAnalytics.Header.projectTitle',
    variant: 'secondary',
  },
  {
    id: '3',
    title: 'DashboardAnalytics.Header.taskOverview',
    variant: 'tertiary',
  },
];
