import type { TableCellProps } from '../model/types';

import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import { sizeClass } from '../lib/styles';

import styles from './Table.module.scss';

export const TableCell: FC<TableCellProps> = ({
  children,
  className,
  size = 'md',
}) => {
  return (
    <td className={buildClassName(className, sizeClass[size], styles.cell)}>
      {children}
    </td>
  );
};
