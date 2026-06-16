import { VARIANTS } from '@/widgets/dashboard-analytics';
import type { DashboardAnalyticsHeaderList } from '@/widgets/dashboard-analytics/model/types';

const { PRIMARY, SECONDARY, TERTIARY } = VARIANTS;

export const dashboardHeaderTitles: DashboardAnalyticsHeaderList = [
  {
    id: '1',
    title: 'revenueTitle',
    variant: PRIMARY,
    content: null,
  },
  {
    id: '2',
    title: 'projectsTitle',
    variant: SECONDARY,
    content: null,
  },
  {
    id: '3',
    title: 'taskOverview',
    variant: TERTIARY,
    content: null,
  },
];
