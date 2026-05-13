import type { ReactNode } from 'react';

type WidgetVariant = 'primary' | 'secondary' | 'tertiary';

export type DashboardAnalyticsHeaderProps = {
  title: string;
  children?: ReactNode;
};

export type DashboardAnalyticsHeaderListItem = {
  id: string;
  title: string;
  variant: WidgetVariant;
  content?: ReactNode | null;
};

export type DashboardAnalyticsHeaderList = DashboardAnalyticsHeaderListItem[];
