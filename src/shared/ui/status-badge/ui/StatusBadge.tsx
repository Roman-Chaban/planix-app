import type { FC } from 'react';

import type { ProjectStatus } from '@/features/projects/model/types';
import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';
import { Typography } from '@/shared/ui/index';
import { statusClasses, statusIcons } from '@/shared/ui/project/lib/statuses/statuses';

import styles from '@/shared/ui/status-badge/styles/status-badge.module.scss';

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
