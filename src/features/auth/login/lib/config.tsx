import type { LoginFormSchema } from '../model/login.schema';

import type { FormFieldConfig } from '@/shared/ui/form/form-fields';

import { MessageIcon, LockIcon } from '@/shared/ui/icons';

import { INPUT_TYPES } from '@/shared/ui/input';

const { EMAIL, PASSWORD } = INPUT_TYPES;

export const loginFormFields: readonly FormFieldConfig<LoginFormSchema>[] = [
  {
    name: 'email',
    label: 'login.emailLabel',
    type: EMAIL,
    placeholder: 'login.emailPlaceholder',
    autoComplete: 'email',
    required: true,
    startIcon: <MessageIcon />,
  },
  {
    name: 'password',
    label: 'login.passwordLabel',
    type: PASSWORD,
    placeholder: 'login.passwordPlaceholder',
    autoComplete: 'current-password',
    startIcon: <LockIcon />,
    required: true,
    feature: 'password-toggle',
    endIcon: null,
  },
] as const;
