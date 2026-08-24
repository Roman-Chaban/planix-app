'use client';

import { Header } from '@/widgets/header';

import { DeleteModal } from '@/features/delete-project';
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
    platformId,
    search,
    projects,
    filteredProjects,
    isFiltering,
    isLoading,
    isEmpty,
    hasData,
    deleteModal,
    setStatusId,
    setPlatformId,
    setSearchQuery,
  } = useProjectsPageModel();

  const isMobileLargeScreen = useMediaQuery(MOBILE_LARGE);

  const responsiveHeaderTitle = isMobileLargeScreen ? 'mobile.projects' : 'projects';

  return (
    <PageWrapper
      header={<Header title={responsiveHeaderTitle} />}
      sectionClassName={styles.projects}
    >
      <Toolbar
        statusId={statusId}
        platformId={platformId}
        search={search}
        projects={projects}
        setStatusId={setStatusId}
        setPlatformId={setPlatformId}
        setSearchQuery={setSearchQuery}
      />

      {isEmpty && <EmptyState />}

      {(isLoading || hasData) && (
        <ProjectsTable
          isLoading={isLoading}
          isFiltering={isFiltering}
          projects={filteredProjects}
          onDelete={deleteModal.openDeleteModal}
        />
      )}

      <DeleteModal
        isOpen={deleteModal.isOpen}
        reason={deleteModal.reason}
        canDelete={deleteModal.canDelete}
        isDeleting={deleteModal.isDeleting}
        error={deleteModal.error}
        onClose={deleteModal.closeDeleteModal}
        onReasonChange={deleteModal.setReason}
        onDelete={deleteModal.handleDeleteProject}
      />
    </PageWrapper>
  );
};
