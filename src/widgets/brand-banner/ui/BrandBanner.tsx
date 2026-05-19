'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import styles from '@/widgets/brand-banner/ui/BrandBanner.module.scss';
import { useMediaQuery } from '@/shared/lib/hooks/useMediaQuery';
import { PlanixLogoIcon } from '@/shared/ui/icons/Icons';
import { Avatar, Box, Typography } from '@/shared/ui/index';
import { BREAKPOINTS } from '@/shared/ui/theme/model/breakpoints';

export const BrandBanner: FC = () => {
  const { t } = useTranslation();
  const isMobileLargeScreen = useMediaQuery(BREAKPOINTS.MOBILE_LARGE);

  const LOGO_SIZES_PROPS = isMobileLargeScreen ? { width: 60, height: 60 } : {};

  return (
    <Box className={styles.banner}>
      <Box className={styles.header}>
        <Avatar alt={t('brand.logoAlt')} icon={<PlanixLogoIcon {...LOGO_SIZES_PROPS} />} />

        <Typography as="span" className={styles.title}>
          {t('brand.title')}
        </Typography>
      </Box>
      <Typography as="h5" className={styles.subtitle}>
        {t('brand.subtitle')}
      </Typography>
    </Box>
  );
};
