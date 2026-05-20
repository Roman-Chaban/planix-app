'use client';

import styles from '@/widgets/not-found/ui/NotFound.module.scss';
import { useMediaQuery } from '@/shared/lib/hooks/useMediaQuery';
import { NotFoundBanner, NotFoundTextDecartionIcon } from '@/shared/ui/icons/index';
import { Box, Grid, GridItem } from '@/shared/ui/index';
import { BREAKPOINTS } from '@/shared/ui/theme/model/breakpoints';

const { LAPTOP } = BREAKPOINTS;

export const NotFoundLayout = () => {
  const isLaptopScreen = useMediaQuery(LAPTOP);

  const ILLUSTRATION_SIZES_PROPS = isLaptopScreen ? { width: 330, height: 330 } : {};

  return (
    <Box className={styles.layout}>
      <Grid className={styles.container}>
        <GridItem span={6}>{<NotFoundBanner {...ILLUSTRATION_SIZES_PROPS} />}</GridItem>
        <GridItem span={6}>
          <Box className={styles.errorBlock}>
            {<NotFoundTextDecartionIcon {...ILLUSTRATION_SIZES_PROPS} />}
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
