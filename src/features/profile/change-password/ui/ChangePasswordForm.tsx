import type { ChangePasswordFormProps } from '../model/change-password.types';

import { PasswordForm } from '@/features/auth/password';

import { AuthButton } from '@/shared/ui';

import { changePasswordFields } from '../lib/fields';
import { useChangePassword } from '../model/useChangePassword';

import styles from './ChangePasswordForm.module.scss';

export const ChangePasswordForm = ({
  translationNamespace,
  buttonLabel,
  successMessage,
  errorMessage,
}: ChangePasswordFormProps) => {
  const { form, onSubmit, isSubmitDisabled, isPending } = useChangePassword({
    successMessage,
    errorMessage,
  });

  return (
    <PasswordForm
      form={form}
      onSubmit={onSubmit}
      fields={changePasswordFields}
      className={styles.changePasswordForm}
      translationNamespace={translationNamespace}
    >
      <AuthButton
        preset="SUBMIT"
        label={buttonLabel}
        className={styles.savePassword}
        disabled={isSubmitDisabled}
        isLoading={isPending}
      />
    </PasswordForm>
  );
};
