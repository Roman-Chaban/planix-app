import type { ReactNode } from 'react';

import type { WithChildren } from '@/shared/types/types';

type WidgetVariant = 'primary' | 'secondary' | 'tertiary';

export type AnalyticsHeaderProps = WithChildren & HeaderListItem;

export type HeaderListItem = {
  id: string;
  title: string;
  variant: WidgetVariant;
  content?: ReactNode | null;
};

export type HeaderListItems = HeaderListItem[];
