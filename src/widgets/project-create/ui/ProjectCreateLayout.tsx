import { Header } from '@/widgets/header';
import { ProjectHeader } from '@/widgets/project-header';
import { ProjectDetails } from '@/features/project-add/ui/add-project-details/ui/ProjectDetails';
import { PageWrapper } from '@/shared/ui';

export const ProjectCreateLayout = () => {
  return (
    <PageWrapper header={<Header title="projects" />}>
      <ProjectHeader
        title="title"
        metaInfo={{ label: 'label', value: 'value' }}
        translationNamespace="projectCreate"
      />

      <ProjectDetails />
    </PageWrapper>
  );
};
