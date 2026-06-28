import type { ReactNode } from 'react';

import type { WithChildren } from '@/shared/types/types';

type WidgetVariant = 'primary' | 'secondary' | 'tertiary';

export type DashboardAnalyticsHeaderProps = WithChildren & {
  title: string;
};

export type DashboardAnalyticsHeaderListItem = {
  id: string;
  title: string;
  variant: WidgetVariant;
  content?: ReactNode | null;
};

export type DashboardAnalyticsHeaderList = DashboardAnalyticsHeaderListItem[];
