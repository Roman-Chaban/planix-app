import type { Cards } from '@/widgets/dashboard-cards/model/types';

export const dashboardCards: Cards = [
  {
    id: '1',
    label: 'totalProjects',
    value: '25',
    name: 'vsLastMonth',
    trend: '+5',
    trendType: 'success',
  },
  {
    id: '2',
    label: 'clients',
    value: '230',
    name: 'vsLastMonth',
    trend: '+8',
    trendType: 'success',
  },
  {
    id: '3',
    label: 'revenue',
    value: '$80,520.00',
    name: 'vsLastMonth',
    trend: '-2%',
    trendType: 'error',
  },
  {
    id: '4',
    label: 'newLeads',
    value: '05',
    name: 'vsLastMonth',
    trend: '+2',
    trendType: 'success',
  },
  {
    id: '5',
    label: 'totalTasks',
    value: '225',
    name: 'vsLastMonth',
    trend: '-12',
    trendType: 'error',
  },
] as const;
