'use client';

import type { TableHeaderProps } from '../model/types';

import type { FC } from 'react';

import styles from './Table.module.scss';

export const TableHeader: FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead className={styles.head}>
      <tr className={styles.row}>
        {columns.map((column) => (
          <th key={column.key} className={styles.heading}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};
