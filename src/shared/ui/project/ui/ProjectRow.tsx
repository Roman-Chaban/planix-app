import { type FC } from 'react';


import { CalendarIcon } from '@/shared/ui/icons/index';
import { StatusBadge, ActionsBar } from '@/shared/ui/index';
import type { ProjectRowProps } from '@/shared/ui/project/model/types';
import styles from '@/shared/ui/project/styles/project.module.scss';

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
