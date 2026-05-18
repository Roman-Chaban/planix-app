import type { ProjectTableItem } from '@/widgets/project-table/config/ProjectTable.types';
import type { TabId } from '@/widgets/projects/config/ProjectsLayout.types';

import { statusMap } from '@/shared/ui/status-badge/Statuses.constants';

export const filterProjects = (
  projects: ProjectTableItem[],
  tab: TabId,
  search: string,
): ProjectTableItem[] => {
  const normalizedSearch = search.trim().toLowerCase();
  const statusFilter = statusMap[tab];

  return projects.filter((project) => {
    const matchesStatus = statusFilter ? project.status === statusFilter : true;

    const matchesSearch = normalizedSearch
      ? project.name.toLowerCase().includes(normalizedSearch) ||
        project.client.name.toLowerCase().includes(normalizedSearch)
      : true;

    return matchesStatus && matchesSearch;
  });
};
