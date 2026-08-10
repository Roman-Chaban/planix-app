'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { Box, Button } from '@/shared/ui';

import styles from './Subscription.module.scss';

export const ProfessionalPlanActions = () => {
  const { t } = useTranslation(NS.SETTINGS);

  return (
    <Box className={styles.actions}>
      <Button preset="CANCEL_PLAN">
        {t('subscriptionAndBilling.professionalActions.cancelPlan')}
      </Button>
      <Button preset="UPDATE_PLAN">
        {t('subscriptionAndBilling.professionalActions.updatePlan')}
      </Button>
    </Box>
  );
};
