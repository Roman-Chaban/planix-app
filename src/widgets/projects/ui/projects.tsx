'use client';

import { Header } from '@/widgets/header';

import { DeleteModal } from '@/features/project-delete';
import { BREAKPOINTS } from '@/shared/lib';
import { useResponsiveValue } from '@/shared/lib/hooks';
import { PageWrapper } from '@/shared/ui';

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
    isInitialLoading,
    isEmpty,
    isFilteredEmpty,
    deleteModal,
    setStatusId,
    setPlatformId,
    setSearchQuery,
  } = useProjectsPageModel();

  const title = useResponsiveValue({
    largeScreenValue: 'projects',
    smallScreenValue: 'mobile.projects',
    breakpoint: MOBILE_LARGE,
  });

  return (
    <PageWrapper header={<Header title={title} />} sectionClassName={styles.projects}>
      <Toolbar
        statusId={statusId}
        platformId={platformId}
        search={search}
        projects={projects}
        setStatusId={setStatusId}
        setPlatformId={setPlatformId}
        setSearchQuery={setSearchQuery}
      />

      {isEmpty || isFilteredEmpty ? (
        <EmptyState />
      ) : (
        <ProjectsTable
          isLoading={isInitialLoading}
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
