import type { ProjectsTableSkeletonProps } from '../../model/table.types';

import { TableSkeleton } from '@/shared/ui';

import { TABLE_SKELETON_ROWS } from '@/shared/ui/skeletons/table';

import { getProjectsTableSkeletonColumns } from '../../lib/get-projects-table-skeleton-columns';

const { LG } = TABLE_SKELETON_ROWS;

export const ProjectsTableSkeleton = ({ t, size, variant }: ProjectsTableSkeletonProps) => {
  const columns = getProjectsTableSkeletonColumns(t);

  return <TableSkeleton variant={variant} columns={columns} rowsCount={LG} size={size} />;
};
