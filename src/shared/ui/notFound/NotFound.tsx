'use client';

import { type FC } from 'react';

import { NotFoundBanner, NotFoundTextDecartionIcon } from '@/shared/ui/icons/index';
import { Box, Grid, GridItem } from '@/shared/ui/index';

import styles from './styles.module.scss';

export const NotFoundLayout: FC = () => {
  return (
    <Box className={styles.layout}>
      <Grid className={styles.container}>
        <GridItem span={6}>
          <NotFoundBanner />
        </GridItem>
        <GridItem span={6}>
          <Box className={styles.errorBlock}>
            <NotFoundTextDecartionIcon />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
