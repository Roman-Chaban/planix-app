'use client';

import { useMemo, type FC } from 'react';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import {
  type TableProps,
  TableHeader,
  TableRow,
  TableColGroup,
  getTableColumns,
} from '@/widgets/project-management/ui/table';

import { createProjectRowActions } from '@/features/project-table/lib/createProjectRowActions';
import { NAMESPACE as NS } from '@/shared/i18n';
import { AXIS, useDragScroll, useLocalizedRouter } from '@/shared/lib/hooks';

import styles from './Table.module.scss';

const DRAG_SCROLL_AXIS = AXIS.X;

const { PROJECT, PROJECT_DETAILS, PROJECT_EDIT } = ROUTES;

export const Table: FC<TableProps> = ({ projects, onDelete }) => {
  const { t } = useTranslation(NS.PROJECT_MANAGEMENT);
  const localizedRouter = useLocalizedRouter();
  const columns = useMemo(() => getTableColumns(t), [t]);

  const dragRef = useDragScroll<HTMLDivElement>({
    axis: DRAG_SCROLL_AXIS,
  });

  const actionsFactory = useMemo(
    () =>
      createProjectRowActions({
        onView: (slug: string) => {
          const projectDetailsUrl = `${PROJECT}${PROJECT_DETAILS}${slug}`;
          localizedRouter.push(projectDetailsUrl);
        },
        onEdit: (id: string | number) => {
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
        <TableColGroup />
        <TableHeader columns={columns} />

        <tbody className={styles.body}>
          {projects.map((project) => (
            <TableRow
              key={project.id}
              project={project}
              actionsFactory={actionsFactory}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
