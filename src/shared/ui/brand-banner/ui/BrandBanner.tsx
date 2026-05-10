'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { BREAKPOINTS } from '@/shared/constants/breakpoints';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import styles from '@/shared/ui/brand-banner/styles/brand-banner.module.scss';
import { PlanixLogoIcon } from '@/shared/ui/icons/ui/Icons';
import { Avatar, Box, Typography } from '@/shared/ui/index';


export const BrandBanner: FC = () => {
  const { t } = useTranslation();
  const isMobileLargeScreen = useMediaQuery(BREAKPOINTS.MOBILE_LARGE);

  const LOGO_SIZES_PROPS = isMobileLargeScreen ? { width: 60, height: 60 } : {};

  return (
    <Box className={styles.banner}>
      <Box className={styles.header}>
        <Avatar alt={t('BrandBanner.logoAlt')} icon={<PlanixLogoIcon {...LOGO_SIZES_PROPS} />} />

        <Typography as="span" className={styles.title}>
          {t('BrandBanner.title')}
        </Typography>
      </Box>
      <Typography as="h5" className={styles.subtitle}>
        {t('BrandBanner.subtitle')}
      </Typography>
    </Box>
  );
};
