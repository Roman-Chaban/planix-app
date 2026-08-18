import type { TableCellProps } from '../model/types';

import { buildClassName } from '@/shared/lib';

import { sizeClass } from '../lib/styles';

import styles from './table.module.scss';

export const TableCell = ({ children, className, size = 'md' }: TableCellProps) => {
  return <td className={buildClassName(className, sizeClass[size], styles.cell)}>{children}</td>;
};
