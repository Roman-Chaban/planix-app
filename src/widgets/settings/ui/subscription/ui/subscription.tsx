'use client';

import { useTranslation } from 'react-i18next';

import { useProfile } from '@/entities/profile';
import { NAMESPACE as NS } from '@/shared/i18n';
import { Box, SettingsHeader } from '@/shared/ui';

import { Billing } from '../../billing/ui/billing';

import { BillingTableSkeleton } from '../../billing/ui/skeleton/billing-skeleton';

import { ProfessionalPlan } from './professional-plan';

import { ProfessionalPlanActions } from './professional-plan-actions';
import { ProfessionalPlanSkeleton } from './skeleton/professional-plan-skeleton';
import styles from './subscription.module.scss';

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
