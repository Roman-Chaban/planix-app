'use client';

import { useTranslation } from 'react-i18next';

import { useProfile } from '@/entities/profile';
import { NAMESPACE as NS } from '@/shared/i18n';
import { Box, SettingsHeader } from '@/shared/ui';

import { Billing } from '../../billing/ui/Billing';

import { BillingTableSkeleton } from '../../billing/ui/skeleton/BillingSkeleton';

import { ProfessionalPlan } from './ProfessionalPlan';

import { ProfessionalPlanActions } from './ProfessionalPlanActions';
import { ProfessionalPlanSkeleton } from './skeleton/ProfessionalPlanSkeleton';
import styles from './Subscription.module.scss';

export const Subscription = () => {
  const { t } = useTranslation(NS.SETTINGS);

  const { profile, isLoading } = useProfile();

  if (!profile) return null;

  return (
    <Box className={styles.subscription}>
      <SettingsHeader title={t('subscriptionAndBilling.title')} />
      <Box className={styles.content}>
        <ProfessionalPlan
          planName={profile.planName}
          planPrice={profile.planPrice}
          nextBillingDateFormatted={profile.nextBillingDateFormatted}
          isLoading={isLoading}
          skeleton={<ProfessionalPlanSkeleton />}
        />
        <ProfessionalPlanActions />
      </Box>
      <Billing skeleton={<BillingTableSkeleton t={t} size="sm" />} />
    </Box>
  );
};
