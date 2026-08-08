export type ProfileData = {
  id: string;
  email: string;
  full_name: string;
  contact: string;
  birth_date: string;
  created_at: string;
  plan_name: string;
  plan_price?: number;
  next_billing_date?: string | null;
  avatar_url: string | null;
};

export type Profile = {
  id: string;
  email: string;
  fullName: string;
  firstName: string;
  lastName: string;
  contact: string;
  birthDate: Date | null;
  createdAt: Date;
  initials: string;
  birthDateFormatted: string;
  createdAtFormatted: string;
  planName: string;
  planPrice: number;
  nextBillingDate: Date | null;
  nextBillingDateFormatted: string;
  avatarUrl: string | null;
};
