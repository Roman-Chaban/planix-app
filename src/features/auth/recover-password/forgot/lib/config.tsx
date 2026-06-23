import type { ForgotPasswordSchema } from '@/features/auth/recover-password/forgot';
import type { FormFieldConfig } from '@/shared/ui/form/form-fields';
import { MessageIcon } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

const { EMAIL } = INPUT_TYPES;

export const registerFormFields: readonly FormFieldConfig<ForgotPasswordSchema>[] =
  [
    {
      name: 'email',
      label: 'forgot.emailLabel',
      type: EMAIL,
      placeholder: 'forgot.emailPlaceholder',
      autoComplete: 'email',
      startIcon: <MessageIcon width={20} height={20} />,
    },
  ] as const;
