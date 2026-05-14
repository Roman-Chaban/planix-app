import type { DashboardAnalyticsHeaderList } from '@/widgets/dashboard/ui/dashboard-analytics/model/types';
import { DashboardAnalyticsRevenue } from '@/widgets/dashboard/ui/dashboard-analytics/ui/DashboardAnalyticsRevenue';

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
    content: null,
  },
  {
    id: '3',
    title: 'DashboardAnalytics.Header.taskOverview',
    variant: 'tertiary',
    content: null,
  },
];
