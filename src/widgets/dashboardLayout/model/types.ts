import type { ReactNode } from 'react';

import type { DashboardCardProps } from '@/shared/ui/dashboardCard/model/types';

export type DashboardHeaderProps = {
  title: string;
  icon: ReactNode;
};

export type DashboardCard = DashboardCardProps;
export type DashboardCards = DashboardCard[];

type WidgetVariant = 'primary' | 'secondary' | 'tertiary';

export type DashboardAnalyticsHeaderProps = {
  title: string;
  children?: ReactNode;
};

export type DashboardAnalyticsHeaderListItem = {
  id: string;
  title: string;
  variant: WidgetVariant;
};

export type DashboardAnalyticsHeaderList = DashboardAnalyticsHeaderListItem[];
