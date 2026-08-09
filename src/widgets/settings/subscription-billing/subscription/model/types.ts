import type { WithSkeleton } from '@types';

export type ProfessionalPlanProps = WithSkeleton & {
  planName?: string;
  planPrice?: number;
  nextBillingDateFormatted?: string;
  isLoading?: boolean;
};
