'use client';

import type { TableProps } from '../model/types';

import { useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';

import { createProjectRowActions } from '@/features/project-table/lib/createProjectRowActions';
import { NAMESPACE as NS } from '@/shared/i18n';
import { AXIS, useDragScroll, useLocalizedRouter } from '@/shared/lib/hooks';

import { getTableColumns } from '../lib/get-table-columns';

import styles from './Table.module.scss';

import { TableColGroup } from './TableGroup';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

const DRAG_SCROLL_AXIS = AXIS.X;

const { PROJECT, PROJECT_DETAILS, PROJECT_EDIT } = ROUTES;

export const Table = ({ projects, onDelete }: TableProps) => {
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
            <TableRow key={project.id} project={project} actionsFactory={actionsFactory} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
