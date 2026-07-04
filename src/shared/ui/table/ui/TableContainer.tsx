import type { TableContainerProps } from '../model/types';

import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import { variantClass } from '../lib/styles';

import styles from './Table.module.scss';

export const TableContainer: FC<TableContainerProps> = ({
  children,
  variant = 'default',
}) => {
  return (
    <div
      className={buildClassName(styles.tableContainer, variantClass[variant])}
    >
      {children}
    </div>
  );
};
