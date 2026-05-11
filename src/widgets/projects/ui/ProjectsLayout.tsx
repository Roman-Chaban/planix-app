'use client';

import styles from '@/widgets/projects/styles/projects.module.scss';
import { ProjectsHeader } from '@/widgets/projects/ui/ProjectsHeader/ui/ProjectsHeader';
import { ProjectToolbar } from '@/widgets/projects/ui/ProjectsToolbar/ui/ProjectsToolbar';
import { useProjectsFilters } from '@/features/projects/hooks/useProjectsFilters';
import { Box, Header, PageWrapper } from '@/shared/ui';

export const ProjectsLayout = () => {
  const { control } = useProjectsFilters();

  return (
    <PageWrapper header={<Header title={'DashboardHeaders.projects'} />}>
      <Box className={styles.headerToolbar}>
        <ProjectsHeader />
        <ProjectToolbar control={control} />
      </Box>
    </PageWrapper>
  );
};
