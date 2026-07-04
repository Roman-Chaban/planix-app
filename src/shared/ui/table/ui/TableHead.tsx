import type { TableHeadProps } from '../model/types';

import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import styles from './Table.module.scss';

export const TableHead: FC<TableHeadProps> = ({ children, className }) => {
  return (
    <thead className={buildClassName(className, styles.thead)}>
      {children}
    </thead>
  );
};
