import type { ResetFormSchema } from '../model/schema';

import { FORM_FIELD_TYPES } from '@/shared/ui/form/form-field';

import type { FormFieldConfig } from '@/shared/ui/form/form-fields';
import { LockIcon, ViewOffIcon } from '@/shared/ui/icons';

const { PASSWORD } = FORM_FIELD_TYPES;

export const resetFormFields: readonly FormFieldConfig<ResetFormSchema>[] = [
  {
    name: 'newPassword',
    label: 'reset.passwordLabel',
    placeholder: 'reset.passwordPlaceholder',
    type: PASSWORD,
    startIcon: <LockIcon />,
    endIcon: <ViewOffIcon />,
    required: true,
    feature: 'password-toggle',
  },
  {
    name: 'confirmPassword',
    label: 'reset.newPasswordLabel',
    placeholder: 'reset.newPasswordPlaceholder',
    type: PASSWORD,
    required: true,
    startIcon: <LockIcon />,
    endIcon: <ViewOffIcon />,
    feature: 'password-toggle',
  },
];
