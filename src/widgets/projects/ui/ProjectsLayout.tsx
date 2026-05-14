'use client';

import { useMemo, useState } from 'react';

import { filterProjects } from '@/widgets/projects/lib/filter-projects/filter-projects';
import { headerItems } from '@/widgets/projects/config/header-items/header-items';
import type { TabId } from '@/widgets/projects/model/types';
import styles from '@/widgets/projects/styles/projects.module.scss';
import { useProjectDeleteModal } from '@/widgets/projects/ui/ProjectsDeleteModal/hooks/useProjectDeleteModal';
import { ProjectsHeader } from '@/widgets/projects/ui/ProjectsHeader/ui/ProjectsHeader';
import { ProjectToolbar } from '@/widgets/projects/ui/ProjectsToolbar/ui/ProjectsToolbar';
import { useAllProjects } from '@/features/projects/hooks/useAllProjects';
import { useProjectsFilters } from '@/features/projects/hooks/useProjectsFilters';
import { toProjectTableItem } from '@/features/projects/model/adapters';
import { Box, Header, NoProjects, PageWrapper } from '@/shared/ui';
import { ProjectsTable } from '@/shared/ui/project/ui/ProjectTable';

import { ProjectDeleteModal } from './ProjectsDeleteModal/ui/ProjectDeleteModal';

export const ProjectsLayout = () => {
  const [activeId, setActiveId] = useState<TabId>(headerItems[0].id);
  const { projectToDelete, openDeleteModal, closeDeleteModal, isOpen } = useProjectDeleteModal();

  const { control, watch } = useProjectsFilters();
  const { data } = useAllProjects();

  const search = watch('search');

  const filteredProjects = useMemo(() => {
    const items = data?.data?.map(toProjectTableItem) ?? [];
    return filterProjects(items, activeId, search);
  }, [data, activeId, search]);

  return (
    <PageWrapper header={<Header title={'DashboardHeaders.projects'} />}>
      <Box className={styles.headerToolbar}>
        <ProjectsHeader activeId={activeId} setActiveId={setActiveId} />
        <ProjectToolbar control={control} />
      </Box>

      {filteredProjects.length === 0 ? (
        <NoProjects />
      ) : (
        <ProjectsTable onTrashClick={openDeleteModal} projects={filteredProjects} />
      )}

      <ProjectDeleteModal isOpen={isOpen} projectId={projectToDelete} onClose={closeDeleteModal} />
    </PageWrapper>
  );
};
