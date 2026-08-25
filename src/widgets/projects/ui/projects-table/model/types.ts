import type { TranslateFn } from '@types';

import type { toProjectTableItem } from '@/entities/project';
import type { TableSize, TableVariant } from '@/shared/ui/table';

export type ProjectsTableProps = {
  projects: TableItem[];
  onDelete: (id: string | number) => void;
  isLoading: boolean;
  isFiltering?: boolean;
};

export type TableItem = ReturnType<typeof toProjectTableItem>;

export type ProjectsTableSkeletonProps = {
  t: TranslateFn;
  size?: TableSize;
  variant?: TableVariant;
};
