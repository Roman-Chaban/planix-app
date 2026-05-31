import { useMemo, useState } from 'react';

import type { TabId } from '@/widgets/project-layout/model/types';
import { headerItems } from '@/widgets/projects-toolbar/model/constants';
import { useDeleteModal } from '@/features/project-delete';
import { filterProjects } from '@/features/project-filter/lib/filter';
import { useProjectsFilters } from '@/features/project-filter/lib/useProjectsFilters';
import { useProjects } from '@/entities/project/api/useProjects';

import { toProjectTableItem } from '@/entities/project/model/adapters';

import { STATUSES } from '@/entities/project/model/statuses';

export const useProjectsPageModel = () => {
  const [activeId, setActiveId] = useState<TabId>(headerItems[0].id);

  const { control, watch } = useProjectsFilters();
  const search = watch('search');

  const deleteModal = useDeleteModal();

  const { data, isLoading, showSkeleton, Skeleton } = useProjects();

  const projects = useMemo(() => {
    const items = data?.data?.map(toProjectTableItem) ?? [];
    return filterProjects(items, activeId, search);
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
