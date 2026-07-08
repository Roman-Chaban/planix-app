import type { SubmitHandler } from 'react-hook-form';

import { setFormErrors } from '@/shared/lib';
import { useAppForm } from '@/shared/lib/hooks';

import { changePasswordSchema, type ChangePasswordSchema } from './change-password.schema';
import { useChangePasswordMutation } from './useChangePasswordMutation';

export const useChangePassword = () => {
  const form = useAppForm({
    schema: changePasswordSchema,
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const mutation = useChangePasswordMutation();

  const onSubmit: SubmitHandler<ChangePasswordSchema> = async (data) => {
    try {
      await mutation.mutateAsync({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      });

      form.reset();
    } catch {
      setFormErrors({
        form,
        fields: ['oldPassword'],
        message: 'settings.validation.invalidPassword',
      });
    }
  };

  return {
    form,
    onSubmit,
    isPending: mutation.isPending,
  };
};
