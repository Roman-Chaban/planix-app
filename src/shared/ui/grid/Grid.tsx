import type { GridProps } from './model/types';

import type { FC } from 'react';

import { classNames } from '@/shared/lib/helpers/class-names';
import { Box } from '@/shared/ui/index';

import styles from './styles.module.scss';

export const Grid: FC<GridProps> = ({ children, className }) => {
  const classes = classNames(styles.grid, className);

  return <Box className={classes}>{children}</Box>;
};
