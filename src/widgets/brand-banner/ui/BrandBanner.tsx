'use client';

import { useTranslation } from 'react-i18next';

import { useMediaQuery } from '@/shared/lib/hooks';
import { PlanixLogoIcon } from '@/shared/ui/icons';
import { Avatar, Box, Typography } from '@/shared/ui/index';
import { BREAKPOINTS } from '@/shared/ui/theme/model/breakpoints';

import styles from './BrandBanner.module.scss';

export const BrandBanner = () => {
  const { t } = useTranslation('brand');
  const isMobileLargeScreen = useMediaQuery(BREAKPOINTS.MOBILE_LARGE);

  const LOGO_SIZES_PROPS = isMobileLargeScreen ? { width: 60, height: 60 } : {};

  return (
    <Box className={styles.banner}>
      <Box className={styles.header}>
        <Avatar alt={t('logoAlt')} icon={<PlanixLogoIcon {...LOGO_SIZES_PROPS} />} />

        <Typography as="span" className={styles.title}>
          {t('title')}
        </Typography>
      </Box>
      <Typography as="h5" className={styles.subtitle}>
        {t('subtitle')}
      </Typography>
    </Box>
  );
};
