import type { DashboardAnalyticsHeaderList } from '@/widgets/dashboard-analytics/model/types';
import { DashboardAnalyticsRevenue } from '@/widgets/dashboard-analytics/ui/DashboardAnalyticsRevenue';

export const dashboardHeaderTitles: DashboardAnalyticsHeaderList = [
  {
    id: '1',
    title: 'dashboard.analytics.revenueTitle',
    variant: 'primary',
    content: <DashboardAnalyticsRevenue />,
  },
  {
    id: '2',
    title: 'dashboard.analytics.projectsTitle',
    variant: 'secondary',
    content: null,
  },
  {
    id: '3',
    title: 'dashboard.analytics.taskOverview',
    variant: 'tertiary',
    content: null,
  },
];
