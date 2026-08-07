import type { UseSubscriptionPlansOptions } from './susbcription-plans.types';

import { useQuery } from '@tanstack/react-query';

import { getSubscriptionPlans } from '../api/getSubscriptionPlans';
import { mapSubscriptionPlan } from '../lib/subscription-plans.mapper';
import { queryKeys } from '../queryKeys/queryKeys';

export const useSubscriptionPlans = ({ lng }: UseSubscriptionPlansOptions) => {
  const query = useQuery({
    queryKey: [...queryKeys.subscriptionPlans.all, lng],
    queryFn: getSubscriptionPlans,
    select: (plans) => plans.map((plan) => mapSubscriptionPlan({ plan, lng })),
  });

  return {
    ...query,
    plans: query.data ?? [],
    isLoading: query.isLoading,
  };
};
