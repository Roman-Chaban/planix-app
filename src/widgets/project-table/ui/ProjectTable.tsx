import type { FC } from 'react';

import { projectTableColumns } from '@/widgets/project-table/model/constants';
import type { ProjectsTableProps } from '@/widgets/project-table/model/types';
import { ProjectRow } from '@/widgets/project-table/ui/ProjectRow';
import { ProjectTableHeader } from '@/widgets/project-table/ui/ProjectsTableHeader';
import styles from '@/widgets/project-table/ui/ProjectTable.module.scss';
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
