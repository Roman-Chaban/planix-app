'use client';

import type { ProjectsTableProps } from '../model/types';

import { useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { createProjectRowActions } from '@/features/project-table/lib/createProjectRowActions';
import { ROUTES } from '@/shared/config/routes';
import { NAMESPACE as NS } from '@/shared/i18n';
import { AXIS, useLocalizedRouter } from '@/shared/lib/hooks';
import { DataTable } from '@/shared/ui';

import { getProjectsTableColumns } from '../lib/get-table-columns';

const { X } = AXIS;
const { PROJECT, PROJECT_DETAILS, PROJECT_EDIT } = ROUTES;

export const ProjectsTable = ({ projects, onDelete }: ProjectsTableProps) => {
  const { t } = useTranslation(NS.PROJECT_MANAGEMENT);
  const localizedRouter = useLocalizedRouter();

  const actionsFactory = useMemo(
    () =>
      createProjectRowActions({
        onView: (slug) => {
          const projectDetailsUrl = `${PROJECT}${PROJECT_DETAILS}${slug}`;
          localizedRouter.push(projectDetailsUrl);
        },
        onEdit: (id) => {
          const projectEditUrl = `${PROJECT_EDIT}${id}`;
          localizedRouter.push(projectEditUrl);
        },
        onDelete,
      }),
    [localizedRouter, onDelete],
  );

  const columns = useMemo(() => getProjectsTableColumns(t, actionsFactory), [t, actionsFactory]);

  return (
    <DataTable
      size="md"
      variant="minimal"
      data={projects}
      columns={columns}
      getRowKey={(project) => project.id}
      dragAxis={X}
    />
  );
};
