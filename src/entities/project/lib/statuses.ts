import type { StatusClasses, StatusIcons } from '@/entities/project/model/types';
import styles from '@/entities/project/styles/project.module.scss';
import { CanceledIcon, CompletedIcon, InProgressIcon, PendingIcon } from '@/shared/ui/icons';

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
