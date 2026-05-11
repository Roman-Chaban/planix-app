import type { FC } from 'react';

import { Sidebar } from '@/widgets/sidebar/ui/Sidebar';
import { Box, Grid } from '@/shared/ui/index';
import type { PageWrapperProps } from '@/shared/ui/page-wrapper/model/types';

import styles from '@/shared/ui/page-wrapper/styles/page-wrapper.module.scss';

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
