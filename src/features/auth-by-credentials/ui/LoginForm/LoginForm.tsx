'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AuthFooter, AuthHeader } from '@/widgets/auth/index';
import { LoginFormMain, LoginFormFields } from '@/features/auth-by-credentials/index';
import { useAuthLogin } from '@/features/auth-by-credentials/model/useAuthLogin';
import styles from '@/features/auth-by-credentials/ui/LoginForm/LoginForm.module.scss';

import { Box } from '@/shared/ui';

export const LoginForm: FC = () => {
  const { t } = useTranslation();

  const form = useAuthLogin();

  return (
    <Box className={styles.loginWrapper}>
      <Box className={styles.loginContent}>
        <AuthHeader
          title={t('AuthLoginForm.header.title')}
          subtitle={t('AuthLoginForm.header.subtitle')}
          highlightedText={t('AuthLoginForm.header.decorationText')}
        />

        <form className={styles.loginForm} onSubmit={form.onSubmit}>
          <LoginFormFields
            emailField={form.register('email')}
            passwordField={form.register('password')}
            emailError={form.errors.email?.message}
            passwordError={form.errors.password?.message}
          />

          <LoginFormMain control={form.control} />
        </form>
      </Box>

      <AuthFooter
        title={t('AuthLoginForm.footer.noAccount')}
        link={t('AuthLoginForm.footer.registration')}
      />
    </Box>
  );
};
