import type { FC } from 'react';

import type { ProjectRowProps } from '@/features/projects/model/types';

import { CalendarIcon } from '@/shared/ui/icons/index';
import { StatusBadge } from '@/shared/ui/index';
import styles from '@/shared/ui/project/styles/project.module.scss';

export const ProjectRow: FC<ProjectRowProps> = ({ project }) => {
  const { status, client, name, dueDate, platform, progressText, formattedPrice } = project;

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
      <td className={styles.cell}>
        <StatusBadge status={status} />
      </td>
      <td className={styles.cell}>Actions</td>
    </tr>
  );
};
