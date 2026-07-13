import type { WithClassName } from '@types';

export type TrendType = 'success' | 'error' | 'neutral';

export type CardProps = WithClassName & {
  id: string;
  label: string;
  value: string;
  name: string;
  trend: string;
  trendType: TrendType;
};
