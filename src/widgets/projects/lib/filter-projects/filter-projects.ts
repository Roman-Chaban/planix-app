import { statusMap } from '@/widgets/projects/lib/status-map/status-map';
import type { TabId } from '@/widgets/projects/model/types';

import type { ProjectTableItem } from '@/features/projects/model/types';

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
