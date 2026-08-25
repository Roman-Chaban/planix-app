import type { HeaderItems } from '../model/project-header.types';

import type { TranslateFn } from '@types';

export const getHeaderItems = (t: TranslateFn): HeaderItems => [
  {
    id: 'AllProjects',
    label: t('toolbar.allProjects'),
  },
  {
    id: 'In Progress',
    label: t('toolbar.inProgress'),
  },
  {
    id: 'Pending',
    label: t('toolbar.pending'),
  },
  {
    id: 'Completed',
    label: t('toolbar.completed'),
  },
  {
    id: 'Canceled',
    label: t('toolbar.canceled'),
  },
];
