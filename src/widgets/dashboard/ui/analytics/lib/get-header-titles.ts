import type { TranslateFn } from '@types';

import { VARIANTS } from './analytics.constants';

const { PRIMARY, SECONDARY, TERTIARY } = VARIANTS;

export const getHeaderTitles = (t: TranslateFn) => [
  {
    id: 'revenue',
    title: t('analytics.revenue'),
    variant: PRIMARY,
    content: null,
  },
  {
    id: 'projects',
    title: t('analytics.projects'),
    variant: SECONDARY,
    content: null,
  },
  {
    id: 'tasks',
    title: t('analytics.taskOverview'),
    variant: TERTIARY,
    content: null,
  },
];
