import type { WithTranslationNamespace } from '@/shared/types/types';

export type ChangePasswordFormProps = WithTranslationNamespace & {
  buttonLabel: string;
  successMessage: string;
  errorMessage: string;
};
