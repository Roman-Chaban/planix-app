import type { FC } from 'react';

import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import { Typography } from '@/shared/ui/index';
import { statusClasses, statusIcons } from '@/shared/ui/status-badge/model/constants';
import type { StatusBadgeProps } from '@/shared/ui/status-badge/model/types';
import styles from '@/shared/ui/status-badge/StatusBadge.module.scss';

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
