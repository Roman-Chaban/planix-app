import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';
import { Typography } from '@/shared/ui';
import type { StatusBadgeProps } from '@/shared/ui/status-badge';
import { statusClasses, statusIcons } from '@/shared/ui/status-badge/model/constants';

import styles from './StatusBadge.module.scss';

export const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
  const statusClassname = buildClassName(styles.statusBadge, statusClasses[status]);
  const Icon = statusIcons[status];

  return (
    <Typography as="h5" className={statusClassname}>
      {Icon && <Icon className={styles.icon} />}
      {status}
    </Typography>
  );
};
