import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import type { ProjectTableHeaderProps } from '@/entities/project/model/ui-types';
import styles from '@/entities/project/styles/project.module.scss';

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
