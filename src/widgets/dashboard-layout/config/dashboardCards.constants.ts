import type { Cards } from '@/widgets/dashboard-cards/config/DashboardCards.types';

export const dashboardCards: Cards = [
  {
    id: '1',
    label: 'DashboardCard.totalProjects',
    value: '25',
    name: 'DashboardCard.vsLastMonth',
    trend: '+5',
    trendType: 'success',
  },
  {
    id: '2',
    label: 'DashboardCard.clients',
    value: '230',
    name: 'DashboardCard.vsLastMonth',
    trend: '+8',
    trendType: 'success',
  },
  {
    id: '3',
    label: 'DashboardCard.revenue',
    value: '$80,520.00',
    name: 'DashboardCard.vsLastMonth',
    trend: '-2%',
    trendType: 'error',
  },
  {
    id: '4',
    label: 'DashboardCard.newLead',
    value: '05',
    name: 'DashboardCard.vsLastMonth',
    trend: '+2',
    trendType: 'success',
  },
  {
    id: '5',
    label: 'DashboardCard.totalTask',
    value: '225',
    name: 'DashboardCard.vsLastMonth',
    trend: '-12',
    trendType: 'error',
  },
] as const;
