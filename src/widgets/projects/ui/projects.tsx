'use client';

import { Header } from '@/widgets/header';

import { DeleteProjectModal } from '@/features/project-delete';
import { PageWrapper } from '@/shared/ui';

import { useProjectsPageModel } from '../model/use-projects-page-model';

import { EmptyState } from './empty-state/empty-state';
import { ProjectsTable } from './projects-table/projects-table';
import styles from './projects.module.scss';
import { Toolbar } from './toolbar/toolbar';

export const ProjectManagement = () => {
  const {
    activeId,
    setActiveId,
    projects,
    filteredProjects,
    isLoading,
    isEmpty,
    hasData,
    deleteModal,
  } = useProjectsPageModel();

  return (
    <PageWrapper header={<Header title="projects" />} sectionClassName={styles.projects}>
      <Toolbar activeId={activeId} setActiveId={setActiveId} projects={projects} />

      {isEmpty && <EmptyState />}

      {(isLoading || hasData) && (
        <ProjectsTable
          isLoading={isLoading}
          projects={filteredProjects}
          onDelete={deleteModal.openDeleteModal}
        />
      )}

      <DeleteProjectModal
        isOpen={deleteModal.isOpen}
        projectId={deleteModal.projectToDelete}
        onClose={deleteModal.closeDeleteModal}
      />
    </PageWrapper>
  );
};
