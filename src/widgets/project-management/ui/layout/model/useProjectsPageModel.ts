import { useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import type { TabId } from '@/widgets/project-management/ui/layout/model/types';
import { useDeleteProject } from '@/features/project-delete';
import { useProjects } from '@/entities/project/api/useProjects';

import { toProjectTableItem } from '@/entities/project/lib/project-table-item';

import { STATUSES } from '@/entities/project/lib/statuses';
import { NAMESPACE as NS } from '@/shared/i18n';

import { getHeaderItems } from '../../../header/lib/get-header-items';

export const useProjectsPageModel = () => {
  const { t } = useTranslation(NS.PROJECT_MANAGEMENT);
  const [activeId, setActiveId] = useState<TabId>(getHeaderItems(t)[0].id);

  const deleteModal = useDeleteProject();

  const { data, isLoading, showSkeleton, Skeleton } = useProjects();

  const projects = useMemo(() => {
    const allProjects = data?.data ?? [];

    return allProjects.map(toProjectTableItem);
  }, [data]);

  const isLoadingState = isLoading || showSkeleton;

  const isEmpty = !isLoadingState && projects.length === 0;
  const hasData = !isLoadingState && projects.length > 0;

  const isCanceled = activeId === STATUSES.CANCELED;

  return {
    activeId,
    setActiveId,
    projects,
    showSkeleton,
    Skeleton,
    isEmpty,
    hasData,
    isCanceled,
    deleteModal,
  };
};
