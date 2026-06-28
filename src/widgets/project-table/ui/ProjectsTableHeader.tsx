'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import type { ProjectTableHeaderProps } from '@/widgets/project-table/model/types';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';

import styles from './ProjectTable.module.scss';

export const ProjectTableHeader: FC<ProjectTableHeaderProps> = ({
  columns,
}) => {
  const { t } = useTranslation(NS.PROJECT_TABLE_HEADER);

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
