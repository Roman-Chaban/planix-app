'use client';

import { type FC } from 'react';

import type { ProjectTableRowProps } from '@/widgets/project-table/model/types';

import { projectActions } from '@/features/project/model/actions';
import { STATUSES } from '@/entities/project/model/statuses';
import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import { StatusBadge, ActionsBar } from '@/shared/ui';
import { CalendarIcon } from '@/shared/ui/icons';

import styles from './ProjectTable.module.scss';

export const ProjectTableRow: FC<ProjectTableRowProps> = ({
  project,
  onTrashClick,
  isShowReason,
}) => {
  const { status, client, name, dueDate, platform, progressText, formattedPrice, reason } = project;

  const actions = projectActions(onTrashClick, project.id);

  return (
    <tr className={styles.bodyRow}>
      <td className={styles.cell}>
        {/* TODO: [Temporary mock Avatar component] */}
        {/* <Avatar width={40} height={40} src={client.avatar} alt={client.name} /> */}
        {client.name}
      </td>
      <td className={styles.cell}>{name}</td>
      <td className={`${styles.cell} ${styles.calendarCell}`}>
        <CalendarIcon />
        {dueDate}
      </td>
      <td className={styles.cell}>{platform}</td>
      <td className={styles.cell}>{progressText}</td>
      <td className={styles.cell}>{formattedPrice}</td>
      {isShowReason && (
        <td className={buildClassName(styles.cell, styles.reason)}>
          {status === STATUSES.CANCELED ? reason : null}
        </td>
      )}
      <td className={styles.cell}>
        <StatusBadge status={status} />
      </td>
      <td className={styles.cell}>
        <ActionsBar actions={actions} />
      </td>
    </tr>
  );
};
