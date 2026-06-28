import type { WithClassName } from '@/shared/types/types';

export type IconProps = WithClassName & {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
};
