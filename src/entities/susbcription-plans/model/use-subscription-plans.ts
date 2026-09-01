import type { UseSubscriptionPlansOptions } from './types';

import { useQuery } from '@tanstack/react-query';

import { getSubscriptionPlans } from '../api/get-subscription-plans';
import { mapSubscriptionPlan } from '../lib/map-subscription-plan';
import { queryKeys } from '../query-keys/query-keys';

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
