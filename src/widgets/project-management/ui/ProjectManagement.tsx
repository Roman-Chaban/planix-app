'use client';

import { Header } from '@/widgets/header';

import { DeleteProjectModal } from '@/features/project-delete';
import { PageWrapper } from '@/shared/ui';

import { useProjectsPageModel } from '../model/useProjectsPageModel';

import { Empty } from './empty';

import styles from './ProjectManagement.module.scss';
import { ProjectsTable } from './table';
import { Toolbar } from './toolbar';

export const ProjectManagement = () => {
  const { activeId, setActiveId, projects, isLoading, isEmpty, hasData, deleteModal } =
    useProjectsPageModel();

  return (
    <PageWrapper header={<Header title="projects" />} sectionClassName={styles.projects}>
      <Toolbar activeId={activeId} setActiveId={setActiveId} />

      {isEmpty && <Empty />}

      {(isLoading || hasData) && (
        <ProjectsTable
          isLoading={isLoading}
          projects={projects}
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
