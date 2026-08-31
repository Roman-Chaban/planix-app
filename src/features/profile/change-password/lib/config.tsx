import type { ChangePasswordSchema } from '../model/schema';

import { FORM_FIELD_TYPES } from '@/shared/ui/form/form-field';
import type { FormFieldConfig } from '@/shared/ui/form/form-fields';
import { LockIcon, ViewOffIcon } from '@/shared/ui/icons';

import styles from '../ui/ChangePasswordForm.module.scss';

const { PASSWORD } = FORM_FIELD_TYPES;

export const changePasswordFields: readonly FormFieldConfig<ChangePasswordSchema>[] = [
  {
    name: 'oldPassword',
    label: 'system.oldPasswordLabel',
    placeholder: 'system.oldPasswordPlaceholder',
    type: PASSWORD,
    startIcon: <LockIcon />,
    endIcon: <ViewOffIcon />,
    required: true,
    feature: 'password-toggle',
    className: styles.oldPassword,
  },
  {
    name: 'newPassword',
    label: 'system.newPasswordLabel',
    placeholder: 'system.newPasswordPlaceholder',
    type: PASSWORD,
    startIcon: <LockIcon />,
    endIcon: <ViewOffIcon />,
    required: true,
    feature: 'password-toggle',
    className: styles.newPassword,
  },
  {
    name: 'confirmPassword',
    label: 'system.confirmPasswordLabel',
    placeholder: 'system.confirmPasswordPlaceholder',
    type: PASSWORD,
    startIcon: <LockIcon />,
    endIcon: <ViewOffIcon />,
    required: true,
    feature: 'password-toggle',
    className: styles.confirmPassword,
  },
];
