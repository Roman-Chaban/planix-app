import type { FC } from 'react';

import { projectTableColumns } from '@/shared/ui/project/lib/project-table-columns/project-table-columns';
import type { ProjectsTableProps } from '@/shared/ui/project/model/types';
import styles from '@/shared/ui/project/styles/project.module.scss';
import { ProjectRow } from '@/shared/ui/project/ui/ProjectRow';
import { ProjectTableHeader } from '@/shared/ui/project/ui/ProjectsTableHeader';
import { Box } from '@shared/ui/index';

export const ProjectsTable: FC<ProjectsTableProps> = ({ projects }) => {
  return (
    <Box className={styles.wrapper}>
      <table className={styles.table}>
        <ProjectTableHeader columns={projectTableColumns} />
        <tbody className={styles.body}>
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </tbody>
      </table>
    </Box>
  );
};
