import type { FC } from 'react';

import type { ProjectTableRowProps } from '@/widgets/project-table/model/types';

import { STATUSES } from '@/entities/project/model/statuses';
import { buildClassName } from '@/shared/lib';
import { StatusBadge, ActionsBar } from '@/shared/ui';
import { CalendarIcon } from '@/shared/ui/icons';

import styles from './ProjectTable.module.scss';

export const ProjectTableRow: FC<ProjectTableRowProps> = ({
  project,
  actionsFactory,
  isShowReason,
}) => {
  const { status, client, name, dueDate, platform, progressText, formattedPrice, reason } = project;

  return (
    <tr className={styles.bodyRow}>
      <td className={styles.cell}>{client.name}</td>

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
        <ActionsBar actions={actionsFactory(project.id)} />
      </td>
    </tr>
  );
};
