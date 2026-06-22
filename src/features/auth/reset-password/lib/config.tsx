import type { ResetFormSchema } from '@/features/auth/reset-password';
import type { FormFieldConfig } from '@/shared/ui/form/form-fields';
import { LockIcon, ViewOffIcon } from '@/shared/ui/icons';
import { INPUT_TYPES } from '@/shared/ui/input';

const { PASSWORD } = INPUT_TYPES;

export const resetFormFields: readonly FormFieldConfig<ResetFormSchema>[] = [
  {
    name: 'newPassword',
    label: 'reset.passwordLabel',
    placeholder: 'reset.passwordPlaceholder',
    type: PASSWORD,
    startIcon: <LockIcon />,
    endIcon: <ViewOffIcon />,
    feature: 'password-toggle',
  },
  {
    name: 'confirmPassword',
    label: 'reset.newPasswordLabel',
    placeholder: 'reset.newPasswordPlaceholder',
    type: PASSWORD,
    startIcon: <LockIcon />,
    endIcon: <ViewOffIcon />,
    feature: 'password-toggle',
  },
];
