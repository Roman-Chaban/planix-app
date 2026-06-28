import { Header } from '@/widgets/header';
import { ProjectHeader } from '@/widgets/project-header/ui/ProjectHeader';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { PageWrapper } from '@/shared/ui';

export const ProjectEditLayout = () => {
  return (
    <PageWrapper header={<Header title="projects" />}>
      <ProjectHeader
        title="title"
        metaInfo={{ value: 'value', label: 'label' }}
        translationNamespace={NS.PROJECT_EDIT}
      />
    </PageWrapper>
  );
};
