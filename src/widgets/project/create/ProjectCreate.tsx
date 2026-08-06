import { Header } from '@/widgets/header';
import { ProjectHeader } from '@/widgets/project-management';
import { DetailsForm } from '@/features/project-add';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { PageWrapper } from '@/shared/ui';

export const ProjectCreate = () => {
  return (
    <PageWrapper header={<Header title="projects" />}>
      <ProjectHeader
        title="title"
        metaInfo={{ label: 'label', value: 'value' }}
        translationNamespace={NS.PROJECT}
      />

      <DetailsForm />
    </PageWrapper>
  );
};
