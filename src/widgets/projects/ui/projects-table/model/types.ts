import type { TranslateFn } from '@types';

import type { mapProjectTableRow } from '@/entities/projects';
import type { TableSizes, TableVariants } from '@/shared/ui/table';

export type ProjectsTableProps = {
  projects: TableItem[];
  onDelete: (id: string | number) => void;
  isLoading: boolean;
  isFiltering?: boolean;
};

export type TableItem = ReturnType<typeof mapProjectTableRow>;

export type ProjectsTableSkeletonProps = {
  t: TranslateFn;
  size?: TableSizes;
  variant?: TableVariants;
};
