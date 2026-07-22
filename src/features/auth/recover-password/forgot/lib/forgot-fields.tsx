import type { ForgotPasswordSchema } from '../model/forgot.schema';

import type { FormFieldConfig } from '@/shared/ui/form/form-fields';
import { MessageIcon } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

const { EMAIL } = INPUT_TYPES;

export const forgotFormFields: readonly FormFieldConfig<ForgotPasswordSchema>[] = [
  {
    name: 'email',
    label: 'forgot.emailLabel',
    type: EMAIL,
    placeholder: 'forgot.emailPlaceholder',
    autoComplete: 'email',
    required: true,
    startIcon: <MessageIcon width={20} height={20} />,
  },
] as const;
