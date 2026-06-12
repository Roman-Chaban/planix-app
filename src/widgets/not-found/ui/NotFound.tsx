'use client';

import { getLogoSized } from '@/shared/lib';
import { useMediaQuery } from '@/shared/lib/hooks';
import { Box, Grid, GridItem } from '@/shared/ui';
import { NotFoundBanner, NotFoundTextDecartionIcon } from '@/shared/ui/icons';
import { BREAKPOINTS } from '@/shared/ui/theme/model/breakpoints';

import styles from './NotFound.module.scss';

const { LAPTOP } = BREAKPOINTS;

export const NotFoundLayout = () => {
  const isLaptopScreen = useMediaQuery(LAPTOP);

  const logoSize = getLogoSized(isLaptopScreen, 330, 330);

  return (
    <Box className={styles.layout}>
      <Grid className={styles.container}>
        <GridItem span={6}>{<NotFoundBanner {...logoSize} />}</GridItem>

        <GridItem span={6}>
          <Box className={styles.errorBlock}>
            {<NotFoundTextDecartionIcon {...logoSize} />}
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
