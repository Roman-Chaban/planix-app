import type { TableProps } from '../model/types';

import { buildClassName } from '@/shared/lib';

import { variantClass } from '../lib/styles';

import styles from './Table.module.scss';

export const Table = ({ children, className, variant = 'default' }: TableProps) => {
  return (
    <table className={buildClassName(className, styles.table, variantClass[variant])}>
      {children}
    </table>
  );
};
