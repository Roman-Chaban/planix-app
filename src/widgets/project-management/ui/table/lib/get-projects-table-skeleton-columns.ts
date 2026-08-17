import type { TranslateFn } from '@types';

import type { TableSkeletonColumn } from '@/shared/ui/skeletons/table';

export const getProjectsTableSkeletonColumns = (t: TranslateFn): TableSkeletonColumn[] => [
  {
    key: 'client_name',
    title: t('tableHeader.clientName'),
  },
  {
    key: 'project_name',
    title: t('tableHeader.projectName'),
  },
  {
    key: 'due_date',
    title: t('tableHeader.dueDate'),
  },
  {
    key: 'platform',
    title: t('tableHeader.platform'),
  },
  {
    key: 'progress',
    title: t('tableHeader.progress'),
  },
  {
    key: 'price',
    title: t('tableHeader.price'),
  },
  {
    key: 'status',
    title: t('tableHeader.status'),
  },
  {
    key: 'actions',
    title: t('tableHeader.action'),
  },
];
