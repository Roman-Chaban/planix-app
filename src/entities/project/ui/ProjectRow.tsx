import { type FC } from 'react';

import type { ProjectRowProps } from '@/entities/project/model/ui-types';
import styles from '@/entities/project/styles/project.module.scss';
import { StatusBadge } from '@/entities/project/ui/status-badge/ui/StatusBadge';
import { CalendarIcon } from '@/shared/ui/icons/index';
import { ActionsBar } from '@/shared/ui/index';

export const ProjectRow: FC<ProjectRowProps> = ({ project, onTrashClick }) => {
  const { status, client, name, dueDate, platform, progressText, formattedPrice } = project;

  return (
    <tr className={styles.bodyRow}>
      <td className={styles.cell}>
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
      <td className={styles.cell}>
        <StatusBadge status={status} />
      </td>
      <td className={styles.cell}>
        <ActionsBar onTrashClick={onTrashClick} />
      </td>
    </tr>
  );
};
