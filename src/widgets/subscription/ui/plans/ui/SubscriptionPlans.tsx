'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useSubscriptionPlans } from '@/entities/susbcription-plans';
import { NAMESPACE as NS } from '@/shared/i18n';
import { List } from '@/shared/ui';

import { SubscriptionPlanSkeleton } from '../../plan';
import { SubscriptionPlan } from '../../plan/ui/SubscriptionPlan';

import { SKELETONS } from '../lib/plans.constants';

import styles from './SubscriptionPlans.module.scss';

export const SubscriptionPlans = () => {
  const { i18n, t } = useTranslation(NS.SUBSCRIPTION);

  const { plans, isLoading } = useSubscriptionPlans({
    lng: i18n.language,
  });

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const activePlanId = selectedPlan ?? plans[1]?.id ?? plans[0]?.id;

  if (isLoading) {
    return (
      <List
        className={styles.subscriptionPlans}
        renderList={SKELETONS}
        getItemKey={(item) => item}
        renderItem={() => <SubscriptionPlanSkeleton />}
      />
    );
  }

  return (
    <List
      className={styles.subscriptionPlans}
      renderList={plans}
      getItemKey={(plan) => plan.id}
      renderItem={(plan) => (
        <SubscriptionPlan
          isActive={activePlanId === plan.id}
          onActive={() => setSelectedPlan(plan.id)}
          plan={plan}
          monthLabel={t('planCard.month')}
        />
      )}
    />
  );
};
