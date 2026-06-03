export type TrendType = 'success' | 'error' | 'neutral';

export type CardProps = {
  id: string;
  label: string;
  value: string;
  name: string;
  trend: string;
  trendType: TrendType;
  className?: string;
  translationNamespace?: string;
};
