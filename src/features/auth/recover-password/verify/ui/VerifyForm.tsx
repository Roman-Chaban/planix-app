import type { FC } from 'react';

import type { NavigateFn } from '@/shared/types/types';
import { AppForm } from '@/shared/ui';

import { useResetPassword } from '../../reset';

type VerifyFormProps = {
  onNavigate: NavigateFn;
};

export const VerifyForm: FC<VerifyFormProps> = ({ onNavigate }) => {
  const { resetForm, handleSubmit } = useResetPassword(onNavigate);

  return (
    <AppForm form={resetForm} onSubmit={handleSubmit}>
      Form
    </AppForm>
  );
};
