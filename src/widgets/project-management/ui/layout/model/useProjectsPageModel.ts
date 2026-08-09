import type { TabId } from '@types';

import { useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { getHeaderItems } from '@/widgets/project-details/ui/header/lib/get-header-items';
import { useDeleteProject } from '@/features/project-delete';
import { STATUSES } from '@/entities/project/lib/statuses.constants';
import { toProjectTableItem } from '@/entities/project/lib/toProjectTableItem';
import { useProjects } from '@/entities/project/model/useProjects';

import { NAMESPACE as NS } from '@/shared/i18n';

export const useProjectsPageModel = () => {
  const { t } = useTranslation(NS.PROJECT_MANAGEMENT);
  const [activeId, setActiveId] = useState<TabId>(getHeaderItems(t)[0].id);

  const deleteModal = useDeleteProject();

  const { data, isLoading } = useProjects();

  const projects = useMemo(() => {
    const allProjects = data?.data ?? [];

    return allProjects.map(toProjectTableItem);
  }, [data]);

  const isLoadingState = isLoading;

  const isEmpty = !isLoadingState && projects.length === 0;
  const hasData = !isLoadingState && projects.length > 0;

  const isCanceled = activeId === STATUSES.CANCELED;

  return {
    activeId,
    setActiveId,
    projects,
    isEmpty,
    hasData,
    isCanceled,
    deleteModal,
  };
};
