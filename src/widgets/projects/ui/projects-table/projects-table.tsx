'use client';

import type { ProjectsTableProps } from './model/types';

import { AXIS } from '@/shared/lib/hooks';
import { DataTable } from '@/shared/ui';

import { TABLE_SIZES, TABLE_VARIANTS } from '@/shared/ui/table';

import { useProjectsTableConfig } from '../../model/use-projects-table-config';

import { ProjectsTableSkeleton } from './skeleton/projects-table-skeleton';

const { X } = AXIS;
const { MD } = TABLE_SIZES;
const { MINIMAL } = TABLE_VARIANTS;

export const ProjectsTable = ({ projects, onDelete, isLoading }: ProjectsTableProps) => {
  const { t, columns } = useProjectsTableConfig(onDelete);

  if (isLoading) {
    return <ProjectsTableSkeleton t={t} />;
  }

  return (
    <DataTable
      size={MD}
      variant={MINIMAL}
      data={projects}
      columns={columns}
      getRowKey={(project) => project.id}
      dragAxis={X}
    />
  );
};
