import type { FC } from 'react';

import { useResetPassword } from '@/features/auth/recover-password/reset';
import type { NavigateFn } from '@/shared/types/types';
import { AppForm } from '@/shared/ui';

type VerifyFormProps = {
  onNavigate: NavigateFn;
};

export const VerifyForm: FC<VerifyFormProps> = ({ onNavigate }) => {
  const { form, onSubmit } = useResetPassword(onNavigate);

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      Form
    </AppForm>
  );
};
