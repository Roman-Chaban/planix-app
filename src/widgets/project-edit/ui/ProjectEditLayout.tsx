import { Header } from '@/widgets/header';
import { Header } from '@/widgets/project-management/ui/header/ui/Header';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { PageWrapper } from '@/shared/ui';

export const ProjectEditLayout = () => {
  return (
    <PageWrapper header={<Header title="projects" />}>
      <Header
        title="title"
        metaInfo={{ value: 'value', label: 'label' }}
        translationNamespace={NS.PROJECT_EDIT}
      />
    </PageWrapper>
  );
};
