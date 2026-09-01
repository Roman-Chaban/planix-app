import type { WithTranslationNamespace } from '@types';

export type ChangePasswordFormProps = WithTranslationNamespace & {
  buttonLabel: string;
  successMessage: string;
  errorMessage: string;
};
