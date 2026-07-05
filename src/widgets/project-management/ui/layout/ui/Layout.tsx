'use client';

import { Header } from '@/widgets/header';
import { Toolbar } from '@/widgets/project-management';
import { Empty } from '@/widgets/project-management/empty';
import { Table } from '@/widgets/project-management/table';
import { useProjectsPageModel } from '@/widgets/project-management/ui/layout/model/useProjectsPageModel';

import { DeleteProjectModal } from '@/features/project-delete';
import { PageWrapper } from '@/shared/ui';

import styles from './Layout.module.scss';

export const Layout = () => {
  const { activeId, setActiveId, isEmpty, hasData, deleteModal, projects } =
    useProjectsPageModel();

  return (
    <PageWrapper
      header={<Header title={'projects'} />}
      sectionClassName={styles.projects}
    >
      <Toolbar activeId={activeId} setActiveId={setActiveId} />

      {isEmpty && <Empty />}

      {hasData && (
        <Table onDelete={deleteModal.openDeleteModal} projects={projects} />
      )}

      <DeleteProjectModal
        isOpen={deleteModal.isOpen}
        projectId={deleteModal.projectToDelete}
        onClose={deleteModal.closeDeleteModal}
      />
    </PageWrapper>
  );
};
