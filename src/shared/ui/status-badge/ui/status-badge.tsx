import { buildClassName } from '@/shared/lib';
import { Typography } from '@/shared/ui';
import type { StatusBadgeProps } from '@/shared/ui/status-badge';
import { statusClasses, statusIcons } from '@/shared/ui/status-badge/model/constants';

import styles from './status-badge.module.scss';

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusClassname = buildClassName(styles.statusBadge, statusClasses[status]);
  const Icon = statusIcons[status];

  return (
    <Typography as="h5" className={statusClassname}>
      {Icon && <Icon className={styles.icon} />}
      {status}
    </Typography>
  );
};
