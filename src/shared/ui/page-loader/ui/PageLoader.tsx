import { Box } from '../../box';
import { PlanixLogoIcon } from '../../icons';

import styles from './PageLoader.module.scss';

export const PageLoader = () => {
  return (
    <Box className={styles.pageLoader} role="status" aria-label="Loading">
      <Box className={styles.content}>
        <PlanixLogoIcon />

        <Box className={styles.indicator} aria-hidden="true" />
      </Box>
    </Box>
  );
};
