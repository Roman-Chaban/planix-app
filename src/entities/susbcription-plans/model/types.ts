export type Plan = {
  id: string;
  name_en: string;
  name_uk: string;
  description_en: string | null;
  description_uk: string | null;
  price: number;
  features_en: string[];
  features_uk: string[];
};

export type SubscriptionPlanCard = {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
};

export type SubscriptionPlanMapOptions = {
  plan: Plan;
  lng: string;
};

export type UseSubscriptionPlansOptions = {
  lng: string;
};
