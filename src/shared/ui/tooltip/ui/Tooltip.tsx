import { type FC } from 'react';

import { Box } from '@/shared/ui';
import { TOOLTIP_POSITION, type TooltipProps } from '@/shared/ui/tooltip';

import styles from './Tooltip.module.scss';

const { TOP } = TOOLTIP_POSITION;

export const Tooltip: FC<TooltipProps> = ({
  children,
  message,
  position = TOP,
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
