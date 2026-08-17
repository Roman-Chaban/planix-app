import type { ProjectsTableSkeletonProps } from '../../model/table.types';

import { TableSkeleton } from '@/shared/ui';

import { TABLE_SKELETON_ROW_COUNT } from '@/shared/ui/skeletons/table';

import { getProjectsTableSkeletonColumns } from '../../lib/get-projects-table-skeleton-columns';

const { lg } = TABLE_SKELETON_ROW_COUNT;

export const ProjectsTableSkeleton = ({ t, size, variant }: ProjectsTableSkeletonProps) => {
  const columns = getProjectsTableSkeletonColumns(t);

  return <TableSkeleton variant={variant} columns={columns} rowCount={lg} size={size} />;
};
