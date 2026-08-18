import type { TableBodyProps } from '../model/types';

import { buildClassName } from '@/shared/lib';

import styles from './table.module.scss';

export const TableBody = ({ children, className }: TableBodyProps) => {
  return <tbody className={buildClassName(className, styles.tbody)}>{children}</tbody>;
};
