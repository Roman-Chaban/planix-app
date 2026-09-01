import type { SubscriptionPlanMapOptions } from '../model/types';

import { APP_LOCALES } from '@/shared/i18n';

export const mapSubscriptionPlan = ({ plan, lng }: SubscriptionPlanMapOptions) => {
  const isUk = lng === APP_LOCALES.UK;

  const name = isUk ? plan.name_uk || plan.name_en : plan.name_en;
  const description = isUk ? plan.description_uk || plan.description_en : plan.description_en;
  const features = isUk ? plan.features_uk : plan.features_en;

  return {
    id: plan.id,
    name: name || '',
    description: description || '',
    price: `$${plan.price.toLocaleString()}`,
    features: features || [],
  };
};
