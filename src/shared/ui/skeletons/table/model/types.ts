import type { TableSizes, TableVariants } from '../../../table';

export type TableSkeletonColumn = {
  key: string;
  title: string;
};

export type TableSkeletonProps = {
  columns: TableSkeletonColumn[];
  rowCount?: number;
  cellHeight?: number;
  cellRadius?: number;
  size: TableSizes;
  variant?: TableVariants;
};
