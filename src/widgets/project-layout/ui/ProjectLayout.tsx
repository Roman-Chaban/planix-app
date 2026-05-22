'use client';

import { Header } from '@/widgets/header';
import { useProjectsPageModel } from '@/widgets/project-layout/model/useProjectsPageModel';

import { ProjectsTable } from '@/widgets/project-table';
import { ProjectsEmpty } from '@/widgets/projects-empty';
import { ProjectsHeader } from '@/widgets/projects-header';
import { ProjectToolbar } from '@/widgets/projects-toolbar';
import { ProjectDeleteModal } from '@/features/delete-project';
import { sharedI18n } from '@/shared/lib/i18n';
import { Box, PageWrapper } from '@/shared/ui';

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
    <PageWrapper header={<Header title={sharedI18n.sidebar.projects} />}>
      <Box className={styles.headerToolbar}>
        <ProjectsHeader activeId={activeId} setActiveId={setActiveId} />

        <ProjectToolbar control={control} />
      </Box>

      {showSkeleton && Skeleton && <Skeleton />}

      {isEmpty && <ProjectsEmpty />}

      {hasData && (
        <ProjectsTable
          isShowReason={isCanceled}
          onTrashClick={deleteModal.openDeleteModal}
          projects={projects}
        />
      )}

      <ProjectDeleteModal
        isOpen={deleteModal.isOpen}
        projectId={deleteModal.projectToDelete}
        onClose={deleteModal.closeDeleteModal}
      />
    </PageWrapper>
  );
};
