import type { FC } from 'react';

import { ProjectTableHeader, ProjectTableRow, ProjectTableColGroup } from '@/widgets/project-table';
import { getProjectTableColumns } from '@/widgets/project-table/model/constants';
import type { ProjectsTableProps } from '@/widgets/project-table/model/types';

import { AXIS, useDragScroll } from '@/shared/lib/hooks';

import styles from './ProjectTable.module.scss';

const { X } = AXIS;

export const ProjectsTable: FC<ProjectsTableProps> = ({
  projects,
  onTrashClick,
  isShowReason = false,
}) => {
  const columns = getProjectTableColumns(isShowReason);

  const dragRef = useDragScroll<HTMLDivElement>({
    axis: X,
  });

  return (
    <div ref={dragRef} className={styles.wrapper}>
      <table className={styles.table}>
        <ProjectTableColGroup isShowReason={isShowReason} />

        <ProjectTableHeader columns={columns} />

        <tbody className={styles.body}>
          {projects.map((project) => (
            <ProjectTableRow
              key={project.id}
              project={project}
              isShowReason={isShowReason}
              onTrashClick={() => onTrashClick(project.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
