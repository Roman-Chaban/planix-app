import type { TableProps } from '../model/types';

import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import { variantClass } from '../lib/styles';

import styles from './Table.module.scss';

export const Table: FC<TableProps> = ({
  children,
  className,
  variant = 'default',
}) => {
  return (
    <table
      className={buildClassName(className, styles.table, variantClass[variant])}
    >
      {children}
    </table>
  );
};
