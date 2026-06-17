'use client';

import { FormProvider } from 'react-hook-form';
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
    handleSubmit,
    control,
    formState: { isValid },
  } = form;

  const onSubmit = handleSubmit((data) => {
    console.log('Login Form Data:', data);
  });

  return (
    <FormProvider {...form}>
      <AuthWrapper
        onSubmit={onSubmit}
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
    </FormProvider>
  );
};
