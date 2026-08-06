import { Header } from '@/widgets/header';
import { ProjectHeader } from '@/widgets/project-management';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { PageWrapper } from '@/shared/ui';

export const ProjectEdit = () => {
  return (
    <PageWrapper header={<Header title="projects" />}>
      <ProjectHeader
        title="title"
        metaInfo={{ value: 'value', label: 'label' }}
        translationNamespace={NS.PROJECT}
      />
    </PageWrapper>
  );
};
