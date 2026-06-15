import type { LoginFormSchema } from '../model/login.schema';

import type { FormFieldConfig } from '@/shared/ui/form-fields';

import { MessageIcon, LockIcon } from '@/shared/ui/icons';

import { INPUT_TYPES } from '@/shared/ui/input';

const { EMAIL, PASSWORD } = INPUT_TYPES;

export const loginFormFields: readonly FormFieldConfig<LoginFormSchema>[] = [
  {
    name: 'email',
    label: 'emailLabel',
    type: EMAIL,
    placeholder: 'emailPlaceholder',
    autoComplete: 'email',
    startIcon: <MessageIcon />,
  },
  {
    name: 'password',
    label: 'passwordLabel',
    type: PASSWORD,
    placeholder: 'passwordPlaceholder',
    autoComplete: 'current-password',
    startIcon: <LockIcon />,
    feature: 'password-toggle',
    endIcon: null,
  },
] as const;
