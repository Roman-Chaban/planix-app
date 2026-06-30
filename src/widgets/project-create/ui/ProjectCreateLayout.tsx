import { Header } from '@/widgets/header';
import { Header as ProjectHeader } from '@/widgets/project-management/ui/header';
import { DetailsForm } from '@/features/project-add';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { PageWrapper } from '@/shared/ui';

export const ProjectCreateLayout = () => {
  return (
    <PageWrapper header={<Header title="projects" />}>
      <ProjectHeader
        title="title"
        metaInfo={{ label: 'label', value: 'value' }}
        translationNamespace={NS.PROJECT_CREATE}
      />

      <DetailsForm />
    </PageWrapper>
  );
};
