import type { GridProps } from './model/types';

import type { FC } from 'react';

import { classNames } from '@/shared/lib/helpers/class-names';
import { Box } from '@/shared/ui/index';

import styles from './styles.module.scss';

export const Grid: FC<GridProps> = ({ children, className }) => {
  return <Box className={classNames(styles.grid, className)}>{children}</Box>;
};
