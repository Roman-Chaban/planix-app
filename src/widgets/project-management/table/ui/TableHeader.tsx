'use client';

import type { TableHeaderProps } from '../model/types';

import styles from './Table.module.scss';

export const TableHeader = ({ columns }: TableHeaderProps) => {
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
