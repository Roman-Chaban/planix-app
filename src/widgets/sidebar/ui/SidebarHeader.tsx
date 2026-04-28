'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { Box, Typography } from '@/shared/ui';
import { PlanixLogoIcon } from '@/shared/ui/icons';

import styles from './styles.module.scss';

export const SidebarHeader: FC = () => {
  const { t } = useTranslation();
  return (
    <Box className={styles.header}>
      <PlanixLogoIcon width={44} height={44} />
      <Typography as="span" className={styles.title}>
        {t('BrandBanner.title')}
      </Typography>
    </Box>
  );
};
