import type { SubscriptionPlanCard } from '@/entities/susbcription-plans';

export type SubscriptionPlanProps = {
  plan: SubscriptionPlanCard;
  monthLabel: string;
  isActive: boolean;
  onActive: () => void;
};

export type SubscriptionPlanFeatureProps = { feature: string; isActive: boolean };
