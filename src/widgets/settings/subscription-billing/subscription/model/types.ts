import type { WithSkeleton } from '@/shared/types/types';

export type ProfessionalPlanProps = WithSkeleton & {
  planName?: string;
  planPrice?: number;
  nextBillingDateFormatted?: string;
  isLoading?: boolean;
};
