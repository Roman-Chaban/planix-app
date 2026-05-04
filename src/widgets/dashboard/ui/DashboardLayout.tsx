'use client';

import { useTranslation } from 'react-i18next';

import { DashboardAnalytics } from '@/widgets/dashboard/ui/DashboardAnalytics/DashboardAnalytics';
import { DashboardCards } from '@/widgets/dashboard/ui/DashboardCards';
import { DashboardHeader } from '@/widgets/dashboard/ui/DashboardHeader';
import { Sidebar } from '@/widgets/sidebar/ui/Sidebar';
import { Box, Grid } from '@/shared/ui';

import { NotificationIcon } from '@/shared/ui/icons';

import styles from './styles.module.scss';

export const DashboardLayout = () => {
  const { t } = useTranslation();

  return (
    <Grid className={styles.grid}>
      <Sidebar />
      <DashboardHeader title={t('DashboardHeader.title')} icon={<NotificationIcon />} />
      <Box className={styles.content}>
        <DashboardCards />
        <DashboardAnalytics />
      </Box>
    </Grid>
  );
};
