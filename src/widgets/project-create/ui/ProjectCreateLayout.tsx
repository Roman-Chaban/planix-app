import { Header } from '@/widgets/header';
import { ProjectHeader } from '@/widgets/project-header';
import { sharedI18n } from '@/shared/lib/i18n';
import { PageWrapper } from '@/shared/ui';

export const ProjectCreateLayout = () => {
  return (
    <PageWrapper header={<Header title={sharedI18n.sidebar.projects} />}>
      <ProjectHeader {...sharedI18n.projectHeader} />
    </PageWrapper>
  );
};
