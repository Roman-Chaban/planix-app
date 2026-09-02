import type { ProjectQueryUpdates } from './types';
import type { PlatformId, TabId } from '@types';

import { useEffect, useMemo, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useDeleteProject } from '@/features/project-delete';
import { mapProjectTableRow, useProjects } from '@/entities/projects';

import { getProjectQueryParams } from '../lib/get-project-query-params';
import { updateProjectQueryParams } from '../lib/update-project-query-params';

import { LOADING_TIMEOUT, PROJECT_TOOLBAR_NAMES } from './constants';

const { ALL_PROJECTS } = PROJECT_TOOLBAR_NAMES;

export const useProjectsPageModel = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { search, status, platform } = getProjectQueryParams(searchParams);

  const [debouncedFilters, setDebouncedFilters] = useState({
    search,
    status,
    platform,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedFilters({
        search,
        status,
        platform,
      });
    }, LOADING_TIMEOUT);

    return () => clearTimeout(timeoutId);
  }, [platform, search, status]);

  const updateQuery = (updates: ProjectQueryUpdates) => {
    const nextParams = updateProjectQueryParams({
      searchParams,
      updates,
    });

    const query = nextParams.toString();

    router.replace(query ? `${pathname}?${query}` : pathname);
  };

  const setSearchQuery = (search: string) => {
    updateQuery({ search });
  };

  const setStatusId = (nextStatus: TabId) => {
    updateQuery({ status: nextStatus });
  };

  const setPlatformId = (nextPlatform: PlatformId | null) => {
    updateQuery({ platform: nextPlatform });
  };

  const deleteModal = useDeleteProject();

  const { data: projectsData, isLoading } = useProjects();

  const projects = useMemo(
    () => (projectsData?.data ?? []).map(mapProjectTableRow),
    [projectsData],
  );

  const filteredProjects = useMemo(() => {
    const normalizedSearch = debouncedFilters.search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesSearch =
        !normalizedSearch ||
        [
          project.project_name,
          project.project_name_uk,
          project.slug,
          project.client_name,
          project.platform,
          project.status,
          project.description,
          project.description_uk,
        ]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(normalizedSearch));

      return (
        matchesSearch &&
        (debouncedFilters.platform === null || project.platform === debouncedFilters.platform) &&
        (debouncedFilters.status === ALL_PROJECTS || project.status === debouncedFilters.status)
      );
    });
  }, [debouncedFilters, projects]);

  const isFiltering =
    search !== debouncedFilters.search ||
    status !== debouncedFilters.status ||
    platform !== debouncedFilters.platform;

  const isInitialLoading = isLoading && !projectsData;

  const isEmpty = !isInitialLoading && projects.length === 0;

  const isFilteredEmpty =
    !isInitialLoading && !isFiltering && projects.length > 0 && filteredProjects.length === 0;

  return {
    statusId: status,
    platformId: platform,
    search,
    projects,
    filteredProjects,
    isFiltering,
    isInitialLoading,
    isEmpty,
    isLoading,
    isFilteredEmpty,
    deleteModal,
    setStatusId,
    setPlatformId,
    setSearchQuery,
  };
};
