import { type FC } from 'react';

import { NotFoundBanner } from '@/shared/ui/icons/index';
import { Box, Grid, GridItem, Typography } from '@/shared/ui/index';

import styles from './styles.module.scss';
import '@/shared/styles/reset/_reset.scss';

export const NotFoundLayout: FC = () => {
  return (
    <Box className={styles.layout}>
      <Grid className={styles.container}>
        <GridItem span={6}>
          <NotFoundBanner />
        </GridItem>
        <GridItem span={6}>
          <Box className={styles.errorBlock}>
            <Typography as="h1" className={styles.errorTitle}>
              Error
            </Typography>
            <Typography as="p" className={styles.errorSubtitle}>
              404
            </Typography>
            <Typography as="h2" className={styles.errorText}>
              Page Not Found
            </Typography>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
