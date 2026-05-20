'use client';

import { Header } from '@/widgets/header/ui/Header';
import { useProjectsPageModel } from '@/widgets/project-layout/model/useProjectsPageModel';
import styles from '@/widgets/project-layout/ui/ProjectLayout.module.scss';
import { ProjectsTable } from '@/widgets/project-table/ui/ProjectTable';
import { ProjectsEmpty } from '@/widgets/projects-empty/ui/ProjectsEmpty';
import { ProjectsHeader } from '@/widgets/projects-header/ui/ProjectsHeader';
import { ProjectToolbar } from '@/widgets/projects-toolbar/ui/ProjectsToolbar';
import { ProjectDeleteModal } from '@/features/delete-project/ui/ProjectDeleteModal';
import { sharedI18n } from '@/shared/lib/i18n/keys';
import { Box } from '@/shared/ui';
import { PageWrapper } from '@/shared/ui/page-wrapper/PageWrapper';

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
