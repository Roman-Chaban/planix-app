'use client';

import type { SubmitHandler } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import {
  LoginActions,
  loginFormFields,
  type LoginFormSchema,
  loginSchema,
} from '@/features/auth/login';

import { useAppForm } from '@/shared/lib/hooks';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import {
  AppForm,
  AuthFooter,
  AuthHeader,
  AuthRedirect,
  AuthWrapper,
  FormFields,
} from '@/shared/ui';

const { REGISTER } = ROUTES;

export const LoginForm = () => {
  const { t } = useTranslation(NS.LOGIN);

  const form = useAppForm<LoginFormSchema>({
    schema: loginSchema,
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const {
    control,
    formState: { isValid },
  } = form;

  const onSubmit: SubmitHandler<LoginFormSchema> = (data) => {
    console.log('Login Form Data:', data);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <AuthWrapper
        header={
          <AuthHeader
            title={t('title')}
            subtitle={t('subtitle')}
            highlightedText={t('highlightedText')}
            isHighlightedIcon
          />
        }
        footer={
          <AuthFooter>
            <AuthRedirect
              title={t('noAccount')}
              linkText={t('registration')}
              href={REGISTER}
            />
          </AuthFooter>
        }
      >
        <FormFields fields={loginFormFields} translationNamespace={NS.LOGIN} />

        <LoginActions
          control={control}
          rememberMeLabel={t('rememberMe')}
          forgotPasswordLabel={t('forgotPassword')}
          submitLabel={t('submitButton')}
          isValid={isValid}
        />
      </AuthWrapper>
    </AppForm>
  );
};
