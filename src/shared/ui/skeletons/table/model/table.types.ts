import type { TableSize, TableVariant } from '@/shared/ui/table/model/types';

export type TableSkeletonColumn = {
  key: string;
  title: string;
};

export type TableSkeletonProps = {
  columns: TableSkeletonColumn[];
  rowCount?: number;
  cellHeight?: number;
  cellRadius?: number;
  size: TableSize;
  variant?: TableVariant;
};
