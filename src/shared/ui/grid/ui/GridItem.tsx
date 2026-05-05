import type { GridItemProps } from '../model/types';

import type { FC } from 'react';

import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';
import { Box } from '@/shared/ui/index';

import styles from '../styles/styles.module.scss';

export const GridItem: FC<GridItemProps> = ({ children, span = 12, className }) => {
  const SPAN_CLASS = styles[`col-span-${span}`];

  return <Box className={buildClassName(styles.item, SPAN_CLASS, className)}>{children}</Box>;
};
