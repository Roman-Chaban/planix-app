import type { TabId } from '@/widgets/project-layout/model/types';
import type { ProjectTableItem } from '@/widgets/project-table/model/types';

import { statusMap } from '@/shared/ui/status-badge/model/constants';

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
