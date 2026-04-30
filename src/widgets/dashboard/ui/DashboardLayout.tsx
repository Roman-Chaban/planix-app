'use client';

import { useTranslation } from 'react-i18next';

import { DashboardContent } from '@/widgets/dashboard/ui/DashboardContent';
import { DashboardHeader } from '@/widgets/dashboard/ui/DashboardHeader';
import { Sidebar } from '@/widgets/sidebar/ui/Sidebar';

import { Grid } from '@/shared/ui';
import { NotificationIcon } from '@/shared/ui/icons';

import styles from './styles.module.scss';

export const DashboardLayout = () => {
  const { t } = useTranslation();

  return (
    <Grid className={styles.grid}>
      <Sidebar />

      <DashboardHeader title={t('DashboardHeader.title')} icon={<NotificationIcon />} />

      <DashboardContent />
    </Grid>
  );
};
