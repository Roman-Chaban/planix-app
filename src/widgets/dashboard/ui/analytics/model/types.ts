import type { AnalyticsVariants } from './constants';
import type { WithChildren } from '@types';

import type { ReactNode } from 'react';

export type AnalyticsHeaderProps = WithChildren & HeaderListItem;

export type HeaderListItem = {
  id: string;
  title: string;
  variant: AnalyticsVariants;
  content?: ReactNode | null;
};

export type HeaderListItems = HeaderListItem[];
