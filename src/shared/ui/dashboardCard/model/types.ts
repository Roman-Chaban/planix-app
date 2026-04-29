export type TrendType = 'success' | 'error' | 'neutral';

export type DashboardCardProps = {
  id: string;
  label: string;
  value: string;
  name: string;
  trend: string;
  trendType: TrendType;
  className?: string;
};
