'use client';

import { useTranslation } from 'react-i18next';

import { useProfile } from '@/entities/settings';
import { NAMESPACE as NS } from '@/shared/i18n';
import {
  BillingTableSkeleton,
  Box,
  ProfessionalPlanSkeleton,
  SettingsHeader,
} from '@/shared/ui';

import { Billing } from '../../billing/ui/Billing';

import { ProfessionalPlan } from './ProfessionalPlan';

import { ProfessionalPlanActions } from './ProfessionalPlanActions';
import styles from './Subscription.module.scss';

export const Subscription = () => {
  const { t } = useTranslation(NS.SETTINGS);

  const { data: profile, isLoading } = useProfile();

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
