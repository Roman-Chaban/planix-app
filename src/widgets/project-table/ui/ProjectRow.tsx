import { type FC } from 'react';

import type { ProjectRowProps } from '@/widgets/project-table/model/types';
import styles from '@/widgets/project-table/ui/ProjectTable.module.scss';
import { CalendarIcon } from '@/shared/ui/icons/index';
import { StatusBadge, ActionsBar } from '@/shared/ui/index';

export const ProjectRow: FC<ProjectRowProps> = ({ project, onTrashClick }) => {
  const { status, client, name, dueDate, platform, progressText, formattedPrice } = project;

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
      <td className={styles.cell}>
        <StatusBadge status={status} />
      </td>
      <td className={styles.cell}>
        <ActionsBar onTrashClick={onTrashClick} />
      </td>
    </tr>
  );
};
