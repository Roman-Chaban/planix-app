import type { NavigateFn } from '@types';
import { AppForm } from '@/shared/ui';

import { useResetPassword } from '../../reset';

type VerifyFormProps = {
  onNavigate: NavigateFn;
};

export const VerifyForm = ({ onNavigate }: VerifyFormProps) => {
  const { resetForm, handleSubmit } = useResetPassword(onNavigate);

  return (
    <AppForm form={resetForm} onSubmit={handleSubmit}>
      Form
    </AppForm>
  );
};
