import type { EmailSentFn, NavigateFn } from '@types';

export type ForgotModalProps = {
  email: string;
};

export type ForgotFormProps = {
  onNavigate: NavigateFn;
  onEmailSent: EmailSentFn;
};
