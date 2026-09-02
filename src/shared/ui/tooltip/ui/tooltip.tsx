import type { TooltipProps } from '../model/types';

import { Box } from '../../box';
import { TOOLTIP_POSITION } from '../model/constants';

import styles from './tooltip.module.scss';

const { TOP } = TOOLTIP_POSITION;

export const Tooltip = ({ children, message, position = TOP }: TooltipProps) => {
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
