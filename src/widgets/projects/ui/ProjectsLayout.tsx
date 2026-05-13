'use client';

import { useMemo, useState } from 'react';

import { filterProjects } from '@/widgets/projects/lib/filter-projects/filter-projects';
import { headerItems } from '@/widgets/projects/lib/header-items/header-items';
import type { TabId } from '@/widgets/projects/model/types';
import styles from '@/widgets/projects/styles/projects.module.scss';
import { ProjectsHeader } from '@/widgets/projects/ui/ProjectsHeader/ui/ProjectsHeader';
import { ProjectToolbar } from '@/widgets/projects/ui/ProjectsToolbar/ui/ProjectsToolbar';
import { useAllProjects } from '@/features/projects/hooks/useAllProjects';
import { useProjectsFilters } from '@/features/projects/hooks/useProjectsFilters';
import { toProjectTableItem } from '@/features/projects/model/adapters';
import { Box, Header, Modal, NoProjects, PageWrapper } from '@/shared/ui';
import { ProjectsTable } from '@/shared/ui/project/ui/ProjectTable';

export const ProjectsLayout = () => {
  const [activeId, setActiveId] = useState<TabId>(headerItems[0].id);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);

  const { control, watch } = useProjectsFilters();
  const { data } = useAllProjects();

  const search = watch('search');

  const projectItems = useMemo(() => {
    return data?.data?.map(toProjectTableItem) ?? [];
  }, [data]);

  const filteredProjects = useMemo(() => {
    return filterProjects(projectItems, activeId, search);
  }, [projectItems, activeId, search]);

  const isEmpty = filteredProjects.length === 0;

  return (
    <PageWrapper header={<Header title={'DashboardHeaders.projects'} />}>
      <Box className={styles.headerToolbar}>
        <ProjectsHeader activeId={activeId} setActiveId={setActiveId} />
        <ProjectToolbar control={control} />
      </Box>

      {isEmpty ? (
        <NoProjects />
      ) : (
        <ProjectsTable onTrashClick={(id) => setProjectToDelete(id)} projects={filteredProjects} />
      )}

      <Modal isOpen={!!projectToDelete} onClose={() => setProjectToDelete(null)} />
    </PageWrapper>
  );
};
