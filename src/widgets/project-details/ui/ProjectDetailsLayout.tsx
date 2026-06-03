import type { FC } from 'react';

import { Header } from '@/widgets/header';
import { ProjectDetails, type ProjectDetailsLayoutProps } from '@/widgets/project-details';
import { ProjectHeader } from '@/widgets/project-header';
import { PageWrapper } from '@/shared/ui';

export const ProjectDetailsLayout: FC<ProjectDetailsLayoutProps> = ({ project }) => {
  return (
    <PageWrapper header={<Header title="projects" />}>
      <ProjectHeader
        showStatus
        status={project.status}
        translationNamespace="projectDetails"
        title="title"
        metaInfo={{ label: 'label', value: 'value' }}
      />

      <ProjectDetails project={project} />
    </PageWrapper>
  );
};
