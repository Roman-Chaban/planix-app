'use client';

import { Header } from '@/widgets/header';

import { DeleteProjectModal } from '@/features/project-delete';
import { PageWrapper } from '@/shared/ui';

import { Empty } from './empty';

import { useProjectsPageModel } from '../model/useProjectsPageModel';

import styles from './ProjectManagement.module.scss';
import { ProjectsTable } from './table';
import { Toolbar } from './toolbar';

export const ProjectManagement = () => {
  const { activeId, setActiveId, isEmpty, hasData, deleteModal, projects } = useProjectsPageModel();

  return (
    <PageWrapper header={<Header title={'projects'} />} sectionClassName={styles.projects}>
      <Toolbar activeId={activeId} setActiveId={setActiveId} />

      {isEmpty && <Empty />}

      {hasData && <ProjectsTable onDelete={deleteModal.openDeleteModal} projects={projects} />}

      <DeleteProjectModal
        isOpen={deleteModal.isOpen}
        projectId={deleteModal.projectToDelete}
        onClose={deleteModal.closeDeleteModal}
      />
    </PageWrapper>
  );
};
