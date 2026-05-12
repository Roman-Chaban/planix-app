import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import type { ProjectTableHeaderProps } from '@/shared/ui/project/model/types';
import styles from '@/shared/ui/project/styles/project.module.scss';

export const ProjectTableHeader: FC<ProjectTableHeaderProps> = ({ columns }) => {
  const { t } = useTranslation();

  return (
    <thead className={styles.head}>
      <tr className={styles.row}>
        {columns.map((column) => (
          <th key={column.key} className={styles.heading}>
            {t(column.label)}
          </th>
        ))}
      </tr>
    </thead>
  );
};
