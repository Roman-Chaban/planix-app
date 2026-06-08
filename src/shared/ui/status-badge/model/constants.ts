import type { Status } from '@/entities/project';
import { CanceledIcon, CompletedIcon, InProgressIcon, PendingIcon } from '@/shared/ui/icons';
import type { StatusClasses, StatusIcons, StatusMap } from '@/shared/ui/status-badge/model/types';

import styles from '../ui/StatusBadge.module.scss';

export const statusClasses: StatusClasses = {
  Pending: styles.pending,
  ['In Progress']: styles.inProgress,
  Completed: styles.completed,
  Canceled: styles.canceled,
} as const;

export const statusIcons: StatusIcons = {
  Pending: PendingIcon,
  ['In Progress']: InProgressIcon,
  Completed: CompletedIcon,
  Canceled: CanceledIcon,
} as const;

export const statusMap: StatusMap = {
  AllProjects: null,
  ['In Progress']: 'In Progress',
  Pending: 'Pending',
  Completed: 'Completed',
  Canceled: 'Canceled',
} as const;

export const getProgressByStatus = (status: Status): number => {
  switch (status) {
    case 'Pending':
      return 0;
    case 'In Progress':
      return 20;
    case 'Completed':
      return 100;
    case 'Canceled':
      return 0;
    default:
      return 0;
  }
};
