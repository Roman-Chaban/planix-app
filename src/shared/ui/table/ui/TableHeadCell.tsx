import type { TableHeadCellProps } from '../model/types';

import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import { sizeClass } from '../lib/styles';

import styles from './Table.module.scss';

export const TableHeadCell: FC<TableHeadCellProps> = ({
  children,
  className,
  size = 'md',
}) => {
  return (
    <th className={buildClassName(className, sizeClass[size], styles.headCell)}>
      {children}
    </th>
  );
};
