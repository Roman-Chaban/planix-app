import type { StatusClasses, StatusIcons } from '../model/types';

import { CanceledIcon, CompletedIcon, InProgressIcon, PendingIcon } from '@/shared/ui/icons';

import styles from '../ui/status-badge.module.scss';

export const statusClasses: StatusClasses = {
  Pending: styles.pending,
  InProgress: styles.inProgress,
  Completed: styles.completed,
  Canceled: styles.canceled,
} as const;

export const statusIcons: StatusIcons = {
  Pending: PendingIcon,
  InProgress: InProgressIcon,
  Completed: CompletedIcon,
  Canceled: CanceledIcon,
} as const;
