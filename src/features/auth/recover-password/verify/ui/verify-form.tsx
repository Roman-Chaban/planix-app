import type { NavigateFn } from '@types';

import { AppForm } from '@/shared/ui';

import { useResetPassword } from '../../reset';

type VerifyFormProps = {
  onNavigate: NavigateFn;
};

// TODO: Implement the VerifyForm component with proper fields and validation. Currently, it is a placeholder for the password reset verification process.

export const VerifyForm = ({ onNavigate }: VerifyFormProps) => {
  const { resetForm, handleSubmit } = useResetPassword(onNavigate);

  return (
    <AppForm form={resetForm} onSubmit={handleSubmit}>
      Form
    </AppForm>
  );
};
