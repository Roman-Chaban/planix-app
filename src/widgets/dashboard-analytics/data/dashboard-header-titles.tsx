import { DashboardAnalyticsRevenue } from '@/widgets/dashboard-analytics';
import type { DashboardAnalyticsHeaderList } from '@/widgets/dashboard-analytics/model/types';

export const dashboardHeaderTitles: DashboardAnalyticsHeaderList = [
  {
    id: '1',
    title: 'revenueTitle',
    variant: 'primary',
    content: <DashboardAnalyticsRevenue />,
  },
  {
    id: '2',
    title: 'projectsTitle',
    variant: 'secondary',
    content: null,
  },
  {
    id: '3',
    title: 'taskOverview',
    variant: 'tertiary',
    content: null,
  },
];
