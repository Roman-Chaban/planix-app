'use client';

import { type FC } from 'react';

// import { useTranslation } from 'react-i18next';

import { NotFoundBanner } from '@/shared/ui/icons/index';
import { Box, Grid, GridItem, Typography } from '@/shared/ui/index';

import styles from './styles.module.scss';

export const NotFoundLayout: FC = () => {
  // const { t } = useTranslation();

  return (
    <Box className={styles.layout}>
      <Grid className={styles.container}>
        <GridItem span={6}>
          <NotFoundBanner />
        </GridItem>
        <GridItem span={6}>
          <Box className={styles.errorBlock}>
            <Typography as="h1" className={styles.errorTitle}>
              {/* {t('NotFound.error')} */}
              Error
            </Typography>
            <Typography as="p" className={styles.errorSubtitle}>
              {/* {t('NotFound.404')} */}
              404
            </Typography>
            <Typography as="h2" className={styles.errorText}>
              {/* {t('NotFound.pageNotFound')} */}
              Page Not Found
            </Typography>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
