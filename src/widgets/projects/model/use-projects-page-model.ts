import type { PlatformId, TabId } from '@types';

import { useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { getHeaderItems } from '@/widgets/project-details/ui/header/lib/get-header-items';
import { useDeleteProject } from '@/features/project-delete';
import { toProjectTableItem } from '@/entities/project/lib/toProjectTableItem';
import { useProjects } from '@/entities/project/model/useProjects';

import { NAMESPACE as NS } from '@/shared/i18n';

export const useProjectsPageModel = () => {
  const { t } = useTranslation(NS.PROJECT_MANAGEMENT);
  const [statusId, setStatusId] = useState<TabId>(getHeaderItems(t)[0].id);
  const [platformId, setPlatformId] = useState<PlatformId | null>(null);

  const deleteModal = useDeleteProject();
  const { data: projectsData, isLoading } = useProjects();

  const projects = useMemo(
    () => (projectsData?.data ?? []).map(toProjectTableItem),
    [projectsData],
  );

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          (platformId === null || project.platform === platformId) &&
          (statusId === 'AllProjects' || project.status === statusId),
      ),
    [projects, platformId, statusId],
  );

  const isEmpty = !isLoading && projects.length === 0;
  const hasData = !isLoading && filteredProjects.length > 0;

  return {
    statusId,
    setStatusId,
    platformId,
    setPlatformId,
    projects,
    filteredProjects,
    isLoading,
    isEmpty,
    hasData,
    deleteModal,
  };
};
