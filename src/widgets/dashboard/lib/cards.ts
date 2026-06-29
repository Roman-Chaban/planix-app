import type { Cards } from '@/widgets/dashboard';
import type { TranslateFn } from '@/shared/types/types';

export const getDashboardCards = (t: TranslateFn): Cards =>
  [
    {
      id: 'totalProjects',
      label: t('cards.totalProjects'),
      value: '25',
      name: t('cards.vsLastMonth'),
      trend: '+5',
      trendType: 'success',
    },
    {
      id: 'clients',
      label: t('cards.clients'),
      value: '230',
      name: t('cards.vsLastMonth'),
      trend: '+8',
      trendType: 'success',
    },
    {
      id: 'revenue',
      label: t('cards.revenue'),
      value: '$80,520.00',
      name: t('cards.vsLastMonth'),
      trend: '-2%',
      trendType: 'error',
    },
    {
      id: 'leads',
      label: t('cards.newLeads'),
      value: '05',
      name: t('cards.vsLastMonth'),
      trend: '+2',
      trendType: 'success',
    },
    {
      id: 'totalTasks',
      label: t('cards.totalTasks'),
      value: '225',
      name: t('cards.vsLastMonth'),
      trend: '-12',
      trendType: 'error',
    },
  ] as const;
