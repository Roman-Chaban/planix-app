import type { NavigateFn } from '@types';
import type { SubmitHandler } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import { showToast } from '@/entities/toast';
import { supabase } from '@/shared/api/supabase';
import { NAMESPACE as NS } from '@/shared/i18n';
import { AUTH_STEPS } from '@/shared/lib/common/constants';
import { useAppForm } from '@/shared/lib/hooks';
import { useAppDispatch } from '@/shared/providers/store/hooks';

import { TOAST_VARIANT } from '@/shared/ui/toast';

import { resetSchema, type ResetFormSchema } from './reset.schema';

const { LOGIN } = AUTH_STEPS;
const { SUCCESS, ERROR } = TOAST_VARIANT;

export const useResetPassword = (onNavigate: NavigateFn) => {
  const { t } = useTranslation(NS.AUTH);
  const dispatch = useAppDispatch();

  const resetForm = useAppForm<ResetFormSchema>({
    schema: resetSchema,
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  const {
    formState: { isValid, isSubmitting },
  } = resetForm;

  const isSubmitDisabled = !isValid || isSubmitting;

  const handleSubmit: SubmitHandler<ResetFormSchema> = async (data) => {
    const { error } = await supabase.auth.updateUser({
      password: data.newPassword,
    });

    if (error) {
      dispatch(
        showToast({
          variant: ERROR,
          description: t('reset.toast.resetError'),
        }),
      );

      return;
    }

    dispatch(
      showToast({
        variant: SUCCESS,
        description: t('reset.toast.resetSuccess'),
      }),
    );

    // TODO: Temporary navigate to dashboard after successufll password reet. Remove this after implementing the next step in the auth flow
    // onNavigate(VERIFY);

    onNavigate(LOGIN);
  };

  return { resetForm, isValid, isSubmitting, isSubmitDisabled, handleSubmit };
};
