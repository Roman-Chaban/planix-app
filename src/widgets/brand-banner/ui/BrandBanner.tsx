'use client';

import { useTranslation } from 'react-i18next';

import { getLogoSize } from '@/widgets/brand-banner/lib/getLogoSize';
import { useMediaQuery } from '@/shared/lib/hooks';
import { PlanixLogoIcon } from '@/shared/ui/icons';
import { Avatar, Box, Typography } from '@/shared/ui/index';
import { BREAKPOINTS } from '@/shared/ui/theme/model/breakpoints';

import styles from './BrandBanner.module.scss';

export const BrandBanner = () => {
  const { t } = useTranslation('brand');
  const isMobileLargeScreen = useMediaQuery(BREAKPOINTS.MOBILE_LARGE);

  const logoSize = getLogoSize(isMobileLargeScreen);

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
