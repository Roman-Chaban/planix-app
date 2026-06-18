'use client';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import { LoginActions, loginFormFields, useLogin } from '@/features/auth/login';

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
  const { isValid, isSubmitting, form, onSubmit, control } = useLogin();

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
          isValid={isValid || isSubmitting}
        />
      </AuthWrapper>
    </AppForm>
  );
};
