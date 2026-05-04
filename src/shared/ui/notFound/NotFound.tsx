'use client';

import { type FC } from 'react';

import { BREAKPOINTS } from '@/shared/constants/breakpoints';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { NotFoundBanner, NotFoundTextDecartionIcon } from '@/shared/ui/icons/index';
import { Box, Grid, GridItem } from '@/shared/ui/index';

import styles from './styles.module.scss';

const { LAPTOP } = BREAKPOINTS;

export const NotFoundLayout: FC = () => {
  const isLaptop = useMediaQuery(LAPTOP);

  const BANNER_RESPONSIVE = isLaptop ? (
    <NotFoundBanner width={330} height={330} />
  ) : (
    <NotFoundBanner />
  );

  const DECORATION_RESPONSIVE = isLaptop ? (
    <NotFoundTextDecartionIcon width={330} height={330} />
  ) : (
    <NotFoundTextDecartionIcon />
  );

  return (
    <Box className={styles.layout}>
      <Grid className={styles.container}>
        <GridItem span={6}>{BANNER_RESPONSIVE}</GridItem>
        <GridItem span={6}>
          <Box className={styles.errorBlock}>{DECORATION_RESPONSIVE}</Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
