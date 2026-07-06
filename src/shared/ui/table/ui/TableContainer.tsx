import type { TableContainerProps } from '../model/types';

import { buildClassName } from '@/shared/lib';

import { variantClass } from '../lib/styles';

import styles from './Table.module.scss';

export const TableContainer = ({ children, variant = 'default' }: TableContainerProps) => {
  return (
    <div className={buildClassName(styles.tableContainer, variantClass[variant])}>{children}</div>
  );
};
