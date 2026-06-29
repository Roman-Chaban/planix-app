import type { Cards } from '@/widgets/dashboard-cards/model/types';
import type { TranslateFn } from '@/shared/types/types';

export const getDashboardCards = (t: TranslateFn): Cards =>
  [
    {
      id: 'totalProjects',
      label: t('totalProjects'),
      value: '25',
      name: t('vsLastMonth'),
      trend: '+5',
      trendType: 'success',
    },
    {
      id: 'clients',
      label: t('clients'),
      value: '230',
      name: t('vsLastMonth'),
      trend: '+8',
      trendType: 'success',
    },
    {
      id: 'revenue',
      label: t('revenue'),
      value: '$80,520.00',
      name: t('vsLastMonth'),
      trend: '-2%',
      trendType: 'error',
    },
    {
      id: 'leads',
      label: t('newLeads'),
      value: '05',
      name: t('vsLastMonth'),
      trend: '+2',
      trendType: 'success',
    },
    {
      id: 'totalTasks',
      label: t('totalTasks'),
      value: '225',
      name: t('vsLastMonth'),
      trend: '-12',
      trendType: 'error',
    },
  ] as const;
