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
  const projectsPage = useProjectsPageModel();

  const Skeleton = projectsPage.Skeleton;

  return (
    <PageWrapper header={<Header title={sharedI18n.sidebar.projects} />}>
      <Box className={styles.headerToolbar}>
        <ProjectsHeader activeId={projectsPage.activeId} setActiveId={projectsPage.setActiveId} />

        <ProjectToolbar control={projectsPage.control} />
      </Box>

      {projectsPage.showSkeleton && Skeleton && <Skeleton />}

      {projectsPage.isEmpty && <ProjectsEmpty />}

      {projectsPage.hasData && (
        <ProjectsTable
          isShowReason={projectsPage.isCanceled}
          onTrashClick={projectsPage.deleteModal.openDeleteModal}
          projects={projectsPage.projects}
        />
      )}

      <ProjectDeleteModal
        isOpen={projectsPage.deleteModal.isOpen}
        projectId={projectsPage.deleteModal.projectToDelete}
        onClose={projectsPage.deleteModal.closeDeleteModal}
      />
    </PageWrapper>
  );
};
