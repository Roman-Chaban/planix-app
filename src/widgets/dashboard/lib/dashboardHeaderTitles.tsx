import type { DashboardAnalyticsHeaderList } from '@/widgets/dashboard/model/types';
import { AnalyticsRevenue } from '@/widgets/dashboard/ui/DashboardAnalytics/AnalyticsRevenue';

export const dashboardHeaderTitles: DashboardAnalyticsHeaderList = [
  {
    id: '1',
    title: 'DashboardAnalytics.Header.revenueTitle',
    variant: 'primary',
    content: <AnalyticsRevenue />,
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
