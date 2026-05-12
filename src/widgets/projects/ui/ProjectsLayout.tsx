'use client';

import { useState } from 'react';

import { headerItems } from '@/widgets/projects/lib/header-items/header-items';
import { tabsContent } from '@/widgets/projects/lib/tabs-content/tabs-content';
import type { TabId } from '@/widgets/projects/model/types';
import styles from '@/widgets/projects/styles/projects.module.scss';
import { ProjectsHeader } from '@/widgets/projects/ui/ProjectsHeader/ui/ProjectsHeader';
import { ProjectToolbar } from '@/widgets/projects/ui/ProjectsToolbar/ui/ProjectsToolbar';
import { useProjectsFilters } from '@/features/projects/hooks/useProjectsFilters';
import { Box, Header, PageWrapper } from '@/shared/ui';

export const ProjectsLayout = () => {
  const [activeId, setActiveId] = useState<TabId>(headerItems[0].id);
  const { control } = useProjectsFilters();

  const ActiveTabComponent = tabsContent[activeId];

  return (
    <PageWrapper header={<Header title={'DashboardHeaders.projects'} />}>
      <Box className={styles.headerToolbar}>
        <ProjectsHeader activeId={activeId} setActiveId={setActiveId} />
        <ProjectToolbar control={control} />
      </Box>
      <ActiveTabComponent />
    </PageWrapper>
  );
};
