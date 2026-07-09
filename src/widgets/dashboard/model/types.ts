import type { ReactNode } from 'react';

import type { DashboardCardProps } from '@/shared/ui/dashboardCard/model/types';

type WidgetVariant = 'primary' | 'secondary' | 'tertiary';

export type DashboardHeaderProps = {
  title: string;
  icon: ReactNode;
};

export type DashboardAnalyticsHeaderProps = {
  title: string;
  children?: ReactNode;
};

export type DashboardAnalyticsHeaderListItem = {
  id: string;
  title: string;
  variant: WidgetVariant;
  content?: ReactNode;
};

export type DashboardAnalyticsHeaderList = DashboardAnalyticsHeaderListItem[];
export type DashboardCard = DashboardCardProps;
export type DashboardCards = DashboardCard[];
