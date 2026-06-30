import type { TabId } from '@/widgets/project-management/ui/layout/model/types';

import type { Project } from '@/entities/project';
import { statusMap } from '@/shared/ui/status-badge/model/constants';

export const filterProjects = (
  projects: Project[],
  tab: TabId,
  search: string,
): Project[] => {
  const normalizedSearch = search.trim().toLowerCase();
  const statusFilter = statusMap[tab];

  return projects.filter((project) => {
    const matchesStatus = statusFilter ? project.status === statusFilter : true;

    const matchesSearch = normalizedSearch
      ? project.project_name.toLowerCase().includes(normalizedSearch) ||
        project.client_name.toLowerCase().includes(normalizedSearch)
      : true;

    return matchesStatus && matchesSearch;
  });
};
