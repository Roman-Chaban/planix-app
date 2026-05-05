import { ProjectsHeader } from '@/widgets/projects/ui/ProjectsHeader/ui/ProjectsHeader';
import { Header, PageWrapper } from '@/shared/ui';

export const ProjectsLayout = () => {
  return (
    <PageWrapper header={<Header title={'DashboardHeaders.projects'} />}>
      <ProjectsHeader />
    </PageWrapper>
  );
};
