'use client';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/shared/config';
import { NAMESPACE as NS } from '@/shared/i18n';
import { useLocalizedRouter } from '@/shared/lib/hooks';
import { Box, Button } from '@/shared/ui';

import { SubscriptionHeader } from './header/ui/subscription-header';
import { SubscriptionPlans } from './plans/ui/subscription-plans';
import styles from './subscription.module.scss';

const { DASHBOARD } = ROUTES;

export const Subscription = () => {
  const { t } = useTranslation(NS.SUBSCRIPTION);

  const localizedRouter = useLocalizedRouter();

  const redirectToDashboardOnSuccess = () => {
    localizedRouter.push(DASHBOARD);
  };

  return (
    <Box as="main" className={styles.subscription}>
      <Box as="section" className={styles.container}>
        <Box className={styles.body}>
          <SubscriptionHeader />
          <SubscriptionPlans />

          <Button preset="SELECT_PLAN" onClick={redirectToDashboardOnSuccess}>
            {t('select')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
