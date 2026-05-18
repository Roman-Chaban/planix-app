import type { FC } from 'react';

import { statusClasses, statusIcons } from '@/entities/project/model/statuses';
import type { ProjectStatus } from '@/entities/project/model/types';
import styles from '@/entities/project/ui/status-badge/styles/status-badge.module.scss';
import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import { Typography } from '@/shared/ui/index';

export const StatusBadge: FC<{ status: ProjectStatus }> = ({ status }) => {
  const statusClassname = buildClassName(styles.statusBadge, statusClasses[status]);
  const Icon = statusIcons[status];

  return (
    <Typography as="h5" className={statusClassname}>
      {Icon && <Icon className={styles.icon} />}
      {status}
    </Typography>
  );
};
