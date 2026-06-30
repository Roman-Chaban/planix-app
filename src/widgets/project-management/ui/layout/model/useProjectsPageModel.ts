import { useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { getHeaderItems } from '@/widgets/project-management/ui/header';
import type { TabId } from '@/widgets/project-management/ui/layout/model/types';
import { useDeleteProject } from '@/features/project-delete';
import { filterProjects } from '@/features/project-filter/lib/filter';
import { useProjectsFilters } from '@/features/project-filter/lib/useProjectsFilters';
import { useProjects } from '@/entities/project/api/useProjects';

import { toProjectTableItem } from '@/entities/project/model/project-table-item';

import { STATUSES } from '@/entities/project/model/statuses';
import { NAMESPACE as NS } from '@/shared/i18n';

export const useProjectsPageModel = () => {
  const { t } = useTranslation(NS.PROJECT_MANAGEMENT);
  const [activeId, setActiveId] = useState<TabId>(getHeaderItems(t)[0].id);

  const { control, watch } = useProjectsFilters();
  const search = watch('search');

  const deleteModal = useDeleteProject();

  const { data, isLoading, showSkeleton, Skeleton } = useProjects();

  const projects = useMemo(() => {
    const filtered = filterProjects(data?.data ?? [], activeId, search);

    return filtered.map(toProjectTableItem);
  }, [data, activeId, search]);

  const isLoadingState = isLoading || showSkeleton;

  const isEmpty = !isLoadingState && projects.length === 0;
  const hasData = !isLoadingState && projects.length > 0;

  const isCanceled = activeId === STATUSES.CANCELED;

  return {
    activeId,
    setActiveId,
    control,
    projects,
    showSkeleton,
    Skeleton,
    isEmpty,
    hasData,
    isCanceled,
    deleteModal,
  };
};
