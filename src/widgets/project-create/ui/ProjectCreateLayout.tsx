import { Header } from '@/widgets/header';
import { ProjectHeader } from '@/widgets/project-header';
import { ProjectDetails } from '@/features/project-add';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { PageWrapper } from '@/shared/ui';

export const ProjectCreateLayout = () => {
  return (
    <PageWrapper header={<Header title="projects" />}>
      <ProjectHeader
        title="title"
        metaInfo={{ label: 'label', value: 'value' }}
        translationNamespace={NS.PROJECT_CREATE}
      />

      <ProjectDetails />
    </PageWrapper>
  );
};
