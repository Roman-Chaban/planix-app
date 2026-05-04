import type { GridItemProps } from '../model/types';

import type { FC } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Box } from '@/shared/ui/index';

import styles from './styles.module.scss';

export const GridItem: FC<GridItemProps> = ({ children, span = 12, className }) => {
  const SPAN_CLASS = styles[`col-span-${span}`];

  return <Box className={classNames(styles.item, SPAN_CLASS, className)}>{children}</Box>;
};
