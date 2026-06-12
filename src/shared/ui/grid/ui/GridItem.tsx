import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import { Box } from '@/shared/ui';
import type { GridItemProps } from '@/shared/ui/grid';

import styles from './Grid.module.scss';

export const GridItem: FC<GridItemProps> = ({
  children,
  span = 12,
  className,
}) => {
  const SPAN_CLASS = styles[`col-span-${span}`];

  return (
    <Box className={buildClassName(styles.item, SPAN_CLASS, className)}>
      {children}
    </Box>
  );
};
