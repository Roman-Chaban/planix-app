import type { FC } from 'react';

import { BrandBanner } from '@/widgets/brand-banner';
import type { WithChildren, WithClassName } from '@/shared/types/types';
import { Box, Grid, GridItem } from '@/shared/ui';

import styles from './AuthLayout.module.scss';

type AuthLayoutProps = WithChildren & WithClassName;

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Box className={styles.layout}>
      <Grid className={styles.grid}>
        <GridItem span={7} className={styles.banner}>
          <BrandBanner />
        </GridItem>

        <GridItem span={5} className={styles.form}>
          {children}
        </GridItem>
      </Grid>
    </Box>
  );
};
