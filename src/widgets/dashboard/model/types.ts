import type { ReactNode } from 'react';

import type { WithChildren } from '@/shared/types/types';
import type { CardProps } from '@/shared/ui/card/model/types';

type WidgetVariant = 'primary' | 'secondary' | 'tertiary';

export type DashboardAnalyticsHeaderProps = WithChildren & HeaderListItem;

export type HeaderListItem = {
  id: string;
  title: string;
  variant: WidgetVariant;
  content?: ReactNode | null;
};

export type HeaderListItems = HeaderListItem[];

export type Card = CardProps;
export type Cards = Card[];
