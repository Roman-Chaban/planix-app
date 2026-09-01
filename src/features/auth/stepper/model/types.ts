import type { EmailSentFn, NavigateFn, TranslateFn } from '@types';

import type { AuthStep as AuthStepParam } from '@/shared/lib/common/constants';

export type AuthStepProps = {
  step: AuthStepParam;
  onNavigate: NavigateFn;
  onEmailSent: EmailSentFn;
};

export type AuthHeaderProps = {
  activeStep: AuthStepParam;
  t: TranslateFn;
};

export type AuthFooterProps = {
  activeStep: AuthStepParam;
  t: TranslateFn;
  navigateToStep: NavigateFn;
};
