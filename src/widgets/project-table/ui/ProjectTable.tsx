import type { FC } from 'react';

import { projectTableColumns } from '@/widgets/project-table/lib/columns';
import { ProjectTableHeader } from '@/widgets/project-table/ui/ProjectsTableHeader';
import type { ProjectsTableProps } from '@/entities/project/model/ui-types';
import styles from '@/entities/project/styles/project.module.scss';
import { ProjectRow } from '@/entities/project/ui/ProjectRow';
import { Box } from '@shared/ui/index';

export const ProjectsTable: FC<ProjectsTableProps> = ({ projects, onTrashClick }) => {
  return (
    <Box className={styles.wrapper}>
      <table className={styles.table}>
        <ProjectTableHeader columns={projectTableColumns} />
        <tbody className={styles.body}>
          {projects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              onTrashClick={() => onTrashClick(project.id)}
            />
          ))}
        </tbody>
      </table>
    </Box>
  );
};
