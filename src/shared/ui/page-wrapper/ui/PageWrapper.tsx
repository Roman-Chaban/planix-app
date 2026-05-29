import type { FC } from 'react';

import { Sidebar } from '@/widgets/sidebar';
import { Box, Grid } from '@/shared/ui';
import type { PageWrapperProps } from '@/shared/ui/page-wrapper';

import styles from './PageWrapper.module.scss';

export const PageWrapper: FC<PageWrapperProps> = ({ children, header, sectionClassName }) => {
  return (
    <Grid className={styles.grid}>
      <Sidebar />

      {header}

      <Box as="main" className={styles.main}>
        <Box as="section" className={sectionClassName}>
          {children}
        </Box>
      </Box>
    </Grid>
  );
};
