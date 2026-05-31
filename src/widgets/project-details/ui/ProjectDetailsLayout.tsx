import type { FC } from 'react';

import { Header } from '@/widgets/header';
import { ProjectHeader } from '@/widgets/project-header';
import type { Project } from '@/widgets/project-table/model/types';
import { PageWrapper } from '@/shared/ui';

type ProjectDetailsLayoutProps = {
  project: Project;
};

export const ProjectDetailsLayout: FC<ProjectDetailsLayoutProps> = ({ project }) => {
  return (
    <PageWrapper header={<Header title="projects" />}>
      <ProjectHeader
        translationNamespace="projectDetails"
        title="title"
        metaInfo={{ label: 'label', value: 'value' }}
      />

      <h1>{project.name}</h1>
    </PageWrapper>
  );
};
