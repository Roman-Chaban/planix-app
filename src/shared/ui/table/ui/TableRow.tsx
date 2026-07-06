import type { TableRowProps } from '../model/types';

import { buildClassName } from '@/shared/lib';

import styles from './Table.module.scss';

export const TableRow = ({ children, className }: TableRowProps) => {
  return <tr className={buildClassName(className, styles.row)}>{children}</tr>;
};
