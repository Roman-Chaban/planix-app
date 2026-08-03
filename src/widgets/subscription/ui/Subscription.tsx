'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { Box, Button } from '@/shared/ui';

import { SubscriptionHeader } from './header/ui/SubscriptionHeader';
import { SubscriptionPlans } from './plans/ui/SubscriptionPlans';
import styles from './Subscription.module.scss';

export const Subscription = () => {
  const { t } = useTranslation(NS.SUBSCRIPTION);

  return (
    <Box as="main" className={styles.subscription}>
      <Box as="section" className={styles.container}>
        <Box className={styles.body}>
          <SubscriptionHeader />
          <SubscriptionPlans />

          <Button preset="SELECT_PLAN">{t('select')}</Button>
        </Box>
      </Box>
    </Box>
  );
};
