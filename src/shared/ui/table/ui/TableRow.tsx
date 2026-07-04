import type { TableRowProps } from '../model/types';

import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import styles from './Table.module.scss';

export const TableRow: FC<TableRowProps> = ({ children, className }) => {
  return <tr className={buildClassName(className, styles.row)}>{children}</tr>;
};
