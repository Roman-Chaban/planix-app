'use client';

import type { ProjectsTableProps } from '../model/table.types';

import { AXIS } from '@/shared/lib/hooks';
import { DataTable } from '@/shared/ui';

import { TABLE_SIZES, TABLE_VARIANTS } from '@/shared/ui/table';

import { useProjectsTableConfig } from '../model/useProjectsTableConfig';

import { ProjectsTableSkeleton } from './skeleton/ProjectsTableSkeleton';

const { X } = AXIS;
const { MD } = TABLE_SIZES;
const { MINIMAL } = TABLE_VARIANTS;

export const ProjectsTable = ({ projects, onDelete, isLoading }: ProjectsTableProps) => {
  const { t, columns } = useProjectsTableConfig(onDelete);

  if (isLoading) {
    return <ProjectsTableSkeleton t={t} size={MD} />;
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
