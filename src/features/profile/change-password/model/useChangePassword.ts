import type { SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '@/app/providers/store/hooks';
import { showToast } from '@/entities/toast';
import { useAppForm } from '@/shared/lib/hooks';

import { TOAST_VARIANT } from '@/shared/ui/toast';

import { changePasswordSchema, type ChangePasswordSchema } from './change-password.schema';
import { useChangePasswordMutation } from './useChangePasswordMutation';

const { SUCCESS, ERROR } = TOAST_VARIANT;

export type UseChangePasswordOptions = {
  successMessage: string;
  errorMessage: string;
};

export const useChangePassword = ({ successMessage, errorMessage }: UseChangePasswordOptions) => {
  const dispatch = useAppDispatch();

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

      dispatch(showToast({ variant: SUCCESS, description: successMessage }));
    } catch {
      dispatch(
        showToast({
          variant: ERROR,
          description: errorMessage,
        }),
      );
    }
  };

  return {
    form,
    onSubmit,
    isPending: mutation.isPending,
  };
};
