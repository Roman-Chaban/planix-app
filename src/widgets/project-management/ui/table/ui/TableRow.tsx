import { useMemo, type FC } from 'react';

import type { TableRowProps } from '@/widgets/project-management/ui/table';
import { STATUSES } from '@/entities/project/model/statuses';
import { buildClassName } from '@/shared/lib';
import { StatusBadge, ActionsBar } from '@/shared/ui';
import { CalendarIcon } from '@/shared/ui/icons';

import styles from './Table.module.scss';

export const TableRow: FC<TableRowProps> = ({
  project,
  actionsFactory,
  isShowReason,
}) => {
  const {
    status,
    client_name,
    project_name,
    slug,
    due_date,
    platform,
    progress,
    price,
    reason,
    id,
  } = project;

  const rowActions = useMemo(
    () => actionsFactory(slug, id),
    [actionsFactory, slug, id],
  );

  const shouldShowReason = isShowReason && status === STATUSES.CANCELED;
  const reasonContent = shouldShowReason ? reason : null;

  return (
    <tr className={styles.bodyRow}>
      <td className={styles.cell}>{client_name}</td>
      <td className={styles.cell}>{project_name}</td>

      <td className={buildClassName(styles.cell, styles.calendarCell)}>
        <CalendarIcon />
        {due_date}
      </td>

      <td className={styles.cell}>{platform}</td>
      <td className={styles.cell}>{progress}</td>
      <td className={styles.cell}>{price}</td>

      {isShowReason && (
        <td className={buildClassName(styles.cell, styles.reason)}>
          {reasonContent}
        </td>
      )}

      <td className={styles.cell}>
        <StatusBadge status={status} />
      </td>

      <td className={styles.cell}>
        <ActionsBar actions={rowActions} />
      </td>
    </tr>
  );
};
