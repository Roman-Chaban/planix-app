import { CanceledIcon, CompletedIcon, InProgressIcon, PendingIcon } from '@/shared/ui/icons';
import type { StatusClasses, StatusIcons, StatusMap } from '@/shared/ui/status-badge/model/types';
import styles from '@/shared/ui/status-badge/StatusBadge.module.scss';

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
