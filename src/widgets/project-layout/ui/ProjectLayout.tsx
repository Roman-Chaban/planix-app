'use client';

import { Header } from '@/widgets/header';
import { useProjectsPageModel } from '@/widgets/project-layout/model/useProjectsPageModel';

import { ProjectsTable } from '@/widgets/project-table';
import { ProjectsEmpty } from '@/widgets/projects-empty';
import { ProjectToolbar } from '@/widgets/projects-toolbar';
import { DeleteModal } from '@/features/project-delete';
import { PageWrapper } from '@/shared/ui';

import styles from './ProjectLayout.module.scss';

export const ProjectLayout = () => {
  const {
    activeId,
    setActiveId,
    control,
    showSkeleton,
    Skeleton,
    isEmpty,
    hasData,
    isCanceled,
    deleteModal,
    projects,
  } = useProjectsPageModel();

  return (
    <PageWrapper header={<Header title={'projects'} />} sectionClassName={styles.projects}>
      <ProjectToolbar control={control} activeId={activeId} setActiveId={setActiveId} />

      {showSkeleton && Skeleton && <Skeleton />}

      {isEmpty && <ProjectsEmpty />}

      {hasData && (
        <ProjectsTable
          isShowReason={isCanceled}
          onDelete={deleteModal.openDeleteModal}
          projects={projects}
        />
      )}

      <DeleteModal
        isOpen={deleteModal.isOpen}
        projectId={deleteModal.projectToDelete}
        onClose={deleteModal.closeDeleteModal}
      />
    </PageWrapper>
  );
};
