import type { TableHeadProps } from '../model/types';

import { buildClassName } from '@/shared/lib';

import styles from './Table.module.scss';

export const TableHead = ({ children, className }: TableHeadProps) => {
  return <thead className={buildClassName(className, styles.thead)}>{children}</thead>;
};
