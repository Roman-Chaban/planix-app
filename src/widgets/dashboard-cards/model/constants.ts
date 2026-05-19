import type { Cards } from '@/widgets/dashboard-cards/model/types';

export const dashboardCards: Cards = [
  {
    id: '1',
    label: 'dashboard.cards.totalProjects',
    value: '25',
    name: 'dashboard.cards.vsLastMonth',
    trend: '+5',
    trendType: 'success',
  },
  {
    id: '2',
    label: 'dashboard.cards.clients',
    value: '230',
    name: 'dashboard.cards.vsLastMonth',
    trend: '+8',
    trendType: 'success',
  },
  {
    id: '3',
    label: 'dashboard.cards.revenue',
    value: '$80,520.00',
    name: 'dashboard.cards.vsLastMonth',
    trend: '-2%',
    trendType: 'error',
  },
  {
    id: '4',
    label: 'dashboard.cards.newLeads',
    value: '05',
    name: 'dashboard.cards.vsLastMonth',
    trend: '+2',
    trendType: 'success',
  },
  {
    id: '5',
    label: 'dashboard.cards.totalTasks',
    value: '225',
    name: 'dashboard.cards.vsLastMonth',
    trend: '-12',
    trendType: 'error',
  },
] as const;
