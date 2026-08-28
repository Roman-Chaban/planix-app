'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { BREAKPOINTS, getLogoSized } from '@/shared/lib';
import { useMediaQuery } from '@/shared/lib/hooks';
import { PlanixLogoIcon } from '@/shared/ui/icons';
import { Avatar, Box, Typography } from '@/shared/ui/index';

import styles from './BrandBanner.module.scss';

const { MOBILE_LARGE } = BREAKPOINTS;

export const BrandBanner = () => {
  const { t } = useTranslation(NS.BRAND);

  const isMobileLargeScreen = useMediaQuery(MOBILE_LARGE);

  const logoSize = getLogoSized(isMobileLargeScreen, { geometry: 60 });

  return (
    <Box className={styles.banner}>
      <Box className={styles.header}>
        <Avatar alt={t('logoAlt')} icon={<PlanixLogoIcon {...logoSize} />} />

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
