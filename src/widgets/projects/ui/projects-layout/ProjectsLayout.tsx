'use client';

import { useMemo, useState } from 'react';

import { Header } from '@/widgets/header/ui/Header';
import { PageWrapper } from '@/widgets/page-wrapper/ui/PageWrapper';
import { ProjectsTable } from '@/widgets/project-table/ui/ProjectTable';
import { headerItems } from '@/widgets/projects/config/header-items/header-items';
import { filterProjects } from '@/widgets/projects/lib/filter-projects/filter-projects';
import type { TabId } from '@/widgets/projects/model/types';
import styles from '@/widgets/projects/styles/projects.module.scss';
import { useProjectDeleteModal } from '@/widgets/projects/ui/projects-delete-modal/hooks/useProjectDeleteModal';
import { ProjectDeleteModal } from '@/widgets/projects/ui/projects-delete-modal/ui/ProjectDeleteModal';
import { ProjectsEmpty } from '@/widgets/projects/ui/projects-empty/ui/ProjectsEmpty';
import { ProjectsHeader } from '@/widgets/projects/ui/projects-header/ui/ProjectsHeader';
import { ProjectToolbar } from '@/widgets/projects/ui/projects-toolbar/ui/ProjectsToolbar';
import { useProjectsFilters } from '@/features/projects/filter-projects/model/useProjectsFilters';
import { useProjects } from '@/entities/project/api/useProjects';
import { toProjectTableItem } from '@/entities/project/lib/adapters';
import { Box } from '@/shared/ui';

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
