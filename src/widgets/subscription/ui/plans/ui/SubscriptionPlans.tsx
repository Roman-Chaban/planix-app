'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useSubscriptionPlans } from '@/entities/susbcription-plans';
import { NAMESPACE as NS } from '@/shared/i18n';
import { List } from '@/shared/ui';

import { SubscriptionPlan } from '../../plan/ui/SubscriptionPlan';

import styles from './SubscriptionPlans.module.scss';

export const SubscriptionPlans = () => {
  const { i18n, t } = useTranslation(NS.SUBSCRIPTION);

  const { plans } = useSubscriptionPlans({
    lng: i18n.language,
  });

  const [selectedPlan, setSelectedPlan] = useState(plans[0]?.id);

  return (
    <List
      className={styles.subscriptionPlans}
      renderList={plans}
      getItemKey={(plan) => plan.id}
      renderItem={(plan) => (
        <SubscriptionPlan
          isActive={selectedPlan === plan.id}
          onActive={() => setSelectedPlan(plan.id)}
          plan={plan}
          monthLabel={t('planCard.month')}
        />
      )}
    />
  );
};
