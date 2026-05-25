import { Header } from '@/widgets/header';
import { ProjectHeader } from '@/widgets/project-header';
import { PageWrapper } from '@/shared/ui';

export const ProjectCreateLayout = () => {
  return (
    <PageWrapper header={<Header title="projects" />}>
      <ProjectHeader title="title" metaInfo={{ label: 'label', value: 'value' }} />
    </PageWrapper>
  );
};
