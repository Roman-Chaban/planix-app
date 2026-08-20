import type { TableHeadCellProps } from '../model/types';

import { buildClassName } from '@/shared/lib';

import { sizeClass } from '../lib/styles';

import styles from './table.module.scss';

export const TableHeadCell = ({ children, className, size = 'md' }: TableHeadCellProps) => {
  return (
    <th className={buildClassName(className, sizeClass[size], styles.headCell)}>{children}</th>
  );
};
