import type { TableSize } from '@/shared/ui/table/model/types';

export const TABLE_SKELETON_ROW_COUNT = {
  sm: 5,
  md: 10,
  lg: 15,
} satisfies Record<TableSize, number>;

export const DEFAULT_CELL_HEIGHT = 25;
export const DEFAULT_CELL_RADIUS = 30;
