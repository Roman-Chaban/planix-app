import { type UseQueryOptions } from '@tanstack/react-query';

export type UseQueryWithSkeletonOptions<T> = UseQueryOptions<T> & {
  Skeleton?: React.ComponentType;
};

export type Point = { x: number; y: number };
export type ScrollPosition = { left: number; top: number };
export type Axis = 'x' | 'y' | 'both';

export type UseEscapeKeyParams = {
  enabled: boolean;
  onEscape: () => void;
};

export type UseDragScrollOptions = {
  axis?: Axis;
  disabled?: boolean;
  momentum?: boolean;
  scrollSpeed?: number;
  dragThreshold?: number;
};
