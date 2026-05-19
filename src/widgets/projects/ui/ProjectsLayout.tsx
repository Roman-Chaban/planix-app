'use client';

import { useMemo, useState } from 'react';

import { Header } from '@/widgets/header/ui/Header';
import { ProjectsTable } from '@/widgets/project-table/ui/ProjectTable';
import type { TabId } from '@/widgets/projects/model/types';
import styles from '@/widgets/projects/ui/Projects.module.scss';
import { ProjectsEmpty } from '@/widgets/projects-empty/ui/ProjectsEmpty';
import { headerItems } from '@/widgets/projects-header/model/constants';
import { ProjectsHeader } from '@/widgets/projects-header/ui/ProjectsHeader';
import { ProjectToolbar } from '@/widgets/projects-toolbar/ui/ProjectsToolbar';
import { useProjectDeleteModal } from '@/features/delete-project/model/useProjectDeleteModal';
import { ProjectDeleteModal } from '@/features/delete-project/ui/ProjectDeleteModal';
import { filterProjects } from '@/features/filter-projects/model/filter';
import { useProjectsFilters } from '@/features/filter-projects/model/useProjectsFilters';
import { useProjects } from '@/entities/project/api/useProjects';
import { toProjectTableItem } from '@/entities/project/model/adapters';
import { Box } from '@/shared/ui';
import { PageWrapper } from '@/shared/ui/page-wrapper/PageWrapper';

export const ProjectsLayout = () => {
  const [activeId, setActiveId] = useState<TabId>(headerItems[0].id);
  const { projectToDelete, openDeleteModal, closeDeleteModal, isOpen } = useProjectDeleteModal();

  const { control, watch } = useProjectsFilters();
  const { data } = useProjects();

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
        <ProjectsEmpty />
      ) : (
        <ProjectsTable onTrashClick={openDeleteModal} projects={filteredProjects} />
      )}

      <ProjectDeleteModal isOpen={isOpen} projectId={projectToDelete} onClose={closeDeleteModal} />
    </PageWrapper>
  );
};
