'use client';

import { useMemo, type FC } from 'react';

import { ROUTES } from '@/app/routes';
import { ProjectTableHeader, ProjectTableRow, ProjectTableColGroup } from '@/widgets/project-table';
import { getProjectTableColumns } from '@/widgets/project-table/model/constants';
import type { ProjectsTableProps } from '@/widgets/project-table/model/types';

import { createProjectRowActions } from '@/features/project-table/lib/createProjectRowActions';
import { slugify } from '@/shared/lib';
import { AXIS, useDragScroll, useLocalizedRouter } from '@/shared/lib/hooks';

import styles from './ProjectTable.module.scss';

const DRAG_SCROLL_AXIS = AXIS.X;
const { PROJECT, PROJECT_DETAILS, PROJECT_EDIT } = ROUTES;

export const ProjectsTable: FC<ProjectsTableProps> = ({
  projects,
  onDelete,
  isShowReason = false,
}) => {
  const localizedRouter = useLocalizedRouter();
  const columns = useMemo(() => getProjectTableColumns(isShowReason), [isShowReason]);

  const dragRef = useDragScroll<HTMLDivElement>({
    axis: DRAG_SCROLL_AXIS,
  });

  const actionsFactory = useMemo(
    () =>
      createProjectRowActions({
        onView: (name: string) => {
          const projectDetailsUrl = `${PROJECT}${PROJECT_DETAILS}${slugify(name)}`;
          localizedRouter.push(projectDetailsUrl);
        },
        onEdit: (id: string) => {
          const projectEditUrl = `${PROJECT_EDIT}${id}`;
          localizedRouter.push(projectEditUrl);
        },
        onDelete,
      }),
    [localizedRouter, onDelete],
  );

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
              actionsFactory={actionsFactory}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
