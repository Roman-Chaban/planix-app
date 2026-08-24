import type { ProjectsTableProps } from '../ui/projects-table/model/types';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { createProjectRowActions } from '@/features/project-table';
import { ROUTES } from '@/shared/config/routes';
import { NAMESPACE as NS } from '@/shared/i18n';
import { useLocalizedRouter } from '@/shared/lib/hooks';

import { getProjectsTableColumns } from '../ui/projects-table/lib/get-table-columns';

const { PROJECT, PROJECT_DETAILS, PROJECT_EDIT } = ROUTES;

export const useProjectsTableConfig = (onDelete: ProjectsTableProps['onDelete']) => {
  const { t } = useTranslation(NS.PROJECTS);
  const { push } = useLocalizedRouter();

  const actions = useMemo(
    () =>
      createProjectRowActions({
        onView: (slug) => push(`${PROJECT}${PROJECT_DETAILS}${slug}`),
        onEdit: (id) => push(`${PROJECT_EDIT}${id}`),
        onDelete,
      }),
    [push, onDelete],
  );

  const columns = useMemo(() => getProjectsTableColumns(t, actions), [t, actions]);

  return {
    t,
    columns,
  };
};
