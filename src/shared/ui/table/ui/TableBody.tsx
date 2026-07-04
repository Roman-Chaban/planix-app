import type { TableBodyProps } from '../model/types';

import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import styles from './Table.module.scss';

export const TableBody: FC<TableBodyProps> = ({ children, className }) => {
  return (
    <tbody className={buildClassName(className, styles.tbody)}>
      {children}
    </tbody>
  );
};
