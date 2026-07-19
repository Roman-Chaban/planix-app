import type { AuthStep as AuthStepParam } from '../lib/stepper.constants';
import type { EmailSentFn, NavigateFn, TranslateFn } from '@types';

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
