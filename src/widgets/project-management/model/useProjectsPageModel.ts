import type { TabId } from '@types';

import { useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { getHeaderItems } from '@/widgets/project-details/ui/header/lib/get-header-items';
import { useDeleteProject } from '@/features/project-delete';
import { toProjectTableItem } from '@/entities/project/lib/toProjectTableItem';
import { useProjects } from '@/entities/project/model/useProjects';

import { NAMESPACE as NS } from '@/shared/i18n';

export const useProjectsPageModel = () => {
  const { t } = useTranslation(NS.PROJECT_MANAGEMENT);
  const [activeId, setActiveId] = useState<TabId>(getHeaderItems(t)[0].id);

  const deleteModal = useDeleteProject();
  const { data: projectsData, isLoading } = useProjects();

  const projects = useMemo(
    () => (projectsData?.data ?? []).map(toProjectTableItem),
    [projectsData],
  );

  const isEmpty = !isLoading && projects.length === 0;
  const hasData = !isLoading && projects.length > 0;

  return {
    activeId,
    setActiveId,
    projects,
    isLoading,
    isEmpty,
    hasData,
    deleteModal,
  };
};
