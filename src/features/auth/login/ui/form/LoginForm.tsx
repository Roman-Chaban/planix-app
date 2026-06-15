'use client';

import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import { useLogin, loginFormFields } from '@/features/auth/login';

import {
  AppLink,
  AuthButton,
  AuthFooter,
  AuthHeader,
  AuthRedirect,
  AuthWrapper,
  Box,
  Checkbox,
  FormFields,
} from '@/shared/ui';
import { BUTTON_MAX_WIDTH } from '@/shared/ui/button';

import styles from './LoginForm.module.scss';

const { LOGIN, FORGOT_PASSWORD } = ROUTES;
const { SM } = BUTTON_MAX_WIDTH;

export const LoginForm = () => {
  const { t } = useTranslation('login');

  const { onSubmit, control, register, errors, isValid } = useLogin();

  const formFieldsProps = {
    translationNamespace: 'login',
    register,
    errors,
    isValid,
  };

  return (
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
            href={LOGIN}
          />
        </AuthFooter>
      }
    >
      <FormFields fields={loginFormFields} {...formFieldsProps} />

      <Box className={styles.loginFormMainWrapper}>
        <Box className={styles.loginFormMain}>
          <Controller
            name="rememberMe"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onChange={field.onChange}
                label={t('rememberMe')}
              />
            )}
          />

          <AppLink href={FORGOT_PASSWORD} className={styles.loginFormLink}>
            {t('forgotPassword')}
          </AppLink>
        </Box>

        <AuthButton
          label={t('submitButton')}
          disabled={!isValid}
          maxWidth={SM}
        />
      </Box>
    </AuthWrapper>
  );
};
