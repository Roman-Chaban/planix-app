import type { SubmitHandler } from 'react-hook-form';

import { showToast } from '@/entities/toast';
import { useAppForm } from '@/shared/lib/hooks';
import { useAppDispatch } from '@/shared/providers/store/hooks';

import { TOAST_VARIANT } from '@/shared/ui/toast';

import { changePasswordSchema, type ChangePasswordSchema } from './schema';
import { useChangePasswordMutation } from './use-change-password-mutation';

const { SUCCESS, ERROR } = TOAST_VARIANT;

export type UseChangePasswordOptions = {
  successMessage: string;
  errorMessage: string;
};

export const useChangePassword = ({ successMessage, errorMessage }: UseChangePasswordOptions) => {
  const dispatch = useAppDispatch();

  const form = useAppForm({
    mode: 'onChange',
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

  const isPending = mutation.isPending;
  const isSubmitDisabled = !form.formState.isValid || isPending;

  return {
    form,
    onSubmit,
    isPending,
    isSubmitDisabled,
  };
};
