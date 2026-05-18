import type { FC } from 'react';

import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import styles from '@/shared/ui/grid/Grid.module.scss';
import type { GridItemProps } from '@/shared/ui/grid/Grid.types';
import { Box } from '@/shared/ui/index';

export const GridItem: FC<GridItemProps> = ({ children, span = 12, className }) => {
  const SPAN_CLASS = styles[`col-span-${span}`];

  return <Box className={buildClassName(styles.item, SPAN_CLASS, className)}>{children}</Box>;
};
