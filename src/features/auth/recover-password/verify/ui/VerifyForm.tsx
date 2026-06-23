import type { FC } from 'react';

import { useResetPassword } from '@/features/auth/recover-password/reset';
import type { AuthStep } from '@/features/auth/stepper';
import { AppForm } from '@/shared/ui';

type VerifyFormProps = {
  onNavigate: (step: AuthStep) => void;
};

export const VerifyForm: FC<VerifyFormProps> = ({ onNavigate }) => {
  const { form, onSubmit } = useResetPassword(onNavigate);

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      Form
    </AppForm>
  );
};
