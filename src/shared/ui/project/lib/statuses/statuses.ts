import type { StatusClasses, StatusIcons } from '@/features/projects/model/types';
import { CanceledIcon, CompletedIcon, InProgressIcon, PendingIcon } from '@/shared/ui/icons';
import styles from '@/shared/ui/status-badge/styles/status-badge.module.scss';

export const statusClasses: StatusClasses = {
  Pending: styles.pending,
  'In Progress': styles.inProgress,
  Completed: styles.completed,
  Canceled: styles.canceled,
};

export const statusIcons: StatusIcons = {
  Pending: PendingIcon,
  'In Progress': InProgressIcon,
  Completed: CompletedIcon,
  Canceled: CanceledIcon,
};
