import { useMemo, type FC } from 'react';

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
  const {
    status,
    client,
    projectName,
    slug,
    formattedDueDate,
    platform,
    progressText,
    formattedPrice,
    reason,
    id,
  } = project;

  const rowActions = useMemo(() => actionsFactory(slug, id), [actionsFactory, slug, id]);

  const shouldShowReason = isShowReason && status === STATUSES.CANCELED;
  const reasonContent = shouldShowReason ? reason : null;

  return (
    <tr className={styles.bodyRow}>
      <td className={styles.cell}>{client.name}</td>

      <td className={styles.cell}>{projectName}</td>

      <td className={buildClassName(styles.cell, styles.calendarCell)}>
        <CalendarIcon />
        {formattedDueDate}
      </td>

      <td className={styles.cell}>{platform}</td>

      <td className={styles.cell}>{progressText}</td>

      <td className={styles.cell}>{formattedPrice}</td>

      {isShowReason && (
        <td className={buildClassName(styles.cell, styles.reason)}>{reasonContent}</td>
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
