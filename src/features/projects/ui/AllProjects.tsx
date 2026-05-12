import styles from '@/widgets/projects/styles/projects.module.scss';
import { useAllProjects } from '@/features/projects/hooks/useAllProjects';
import { toProjectTableItem } from '@/features/projects/model/adapters';
import { Box } from '@/shared/ui';
import { NoProjects } from '@/shared/ui/no-projects/ui/NoProjects';

import { ProjectsTable } from '@/shared/ui/project/ui/ProjectTable';

export const AllProjects = () => {
  const { data, error } = useAllProjects();

  if (error || !data?.data?.length) {
    return (
      <Box as="section" className={styles.content}>
        <NoProjects />
      </Box>
    );
  }

  const projects = data.data.map(toProjectTableItem);

  return (
    <Box as="section" className={styles.content}>
      <ProjectsTable projects={projects} />
    </Box>
  );
};
