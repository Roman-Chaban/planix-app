import type { CardTrendType } from './constants';
import type { WithClassName } from '@types';

export type CardProps = {
  id: string;
  label: string;
  value: string;
  name: string;
  trend: string;
  trendType: CardTrendType;
} & WithClassName;
