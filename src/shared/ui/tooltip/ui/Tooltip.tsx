import type { TooltipProps } from '../model/types';

import { type FC } from 'react';

import { Box } from '@/shared/ui';

import styles from './Tooltip.module.scss';

export const Tooltip: FC<TooltipProps> = ({
  children,
  message,
  position = 'top',
}) => {
  return (
    <Box className={styles.container}>
      <Box className={styles.trigger}>{children}</Box>
      <Box className={styles.tooltip} data-position={position}>
        {message}
        <Box as="span" className={styles.arrow} />
      </Box>
    </Box>
  );
};
