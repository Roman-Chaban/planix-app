'use client';

import { Header } from '@/widgets/header';

import { DeleteProjectModal } from '@/features/project-delete';
import { useMediaQuery } from '@/shared/lib/hooks';
import { PageWrapper } from '@/shared/ui';

import { BREAKPOINTS } from '@/shared/ui/theme';

import { useProjectsPageModel } from '../model/use-projects-page-model';

import { EmptyState } from './empty-state/empty-state';
import { ProjectsTable } from './projects-table/projects-table';
import styles from './projects.module.scss';
import { Toolbar } from './toolbar/toolbar';

const { MOBILE_LARGE } = BREAKPOINTS;

export const ProjectManagement = () => {
  const {
    statusId,
    setStatusId,
    platformId,
    setPlatformId,
    projects,
    filteredProjects,
    isLoading,
    isEmpty,
    hasData,
    deleteModal,
  } = useProjectsPageModel();

  const isMobileLargeScreen = useMediaQuery(MOBILE_LARGE);

  const headerTitle = isMobileLargeScreen ? 'mobile.projects' : 'projects';

  return (
    <PageWrapper header={<Header title={headerTitle} />} sectionClassName={styles.projects}>
      <Toolbar
        statusId={statusId}
        setStatusId={setStatusId}
        platformId={platformId}
        setPlatformId={setPlatformId}
        projects={projects}
      />

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
