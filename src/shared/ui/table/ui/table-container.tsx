import type { TableContainerProps } from '../model/types';

import { buildClassName } from '@/shared/lib';

import { variantClass } from '../lib/styles';

import styles from './table.module.scss';

export const TableContainer = ({ children, variant = 'default', ref }: TableContainerProps) => {
  return (
    <div ref={ref} className={buildClassName(styles.tableContainer, variantClass[variant])}>
      {children}
    </div>
  );
};
