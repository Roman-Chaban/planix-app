import type { FC } from 'react';

import type { PageWrapperProps } from '@/widgets/page-wrapper/model/types';
import styles from '@/widgets/page-wrapper/styles/page-wrapper.module.scss';
import { Sidebar } from '@/widgets/sidebar/ui/sidebar/Sidebar';
import { Box, Grid } from '@/shared/ui/index';

export const PageWrapper: FC<PageWrapperProps> = ({ children, header }) => {
  return (
    <Grid className={styles.grid}>
      <Sidebar />

      {header}

      <Box as="main" className={styles.main}>
        {children}
      </Box>
    </Grid>
  );
};
