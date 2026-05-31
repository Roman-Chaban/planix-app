'use client';

import { useTranslation } from 'react-i18next';

import {
  LoginHeader,
  LoginFooter,
  LoginContent,
  LoginFields,
} from '@/features/auth-by-credentials';
import { useLogin } from '@/features/auth-by-credentials/lib/useLogin';

import { Box } from '@/shared/ui';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const { t } = useTranslation('login');

  const form = useLogin();

  return (
    <Box className={styles.loginWrapper}>
      <Box className={styles.loginContent}>
        <LoginHeader
          title={t('title')}
          subtitle={t('subtitle')}
          highlightedText={t('highlightedText')}
        />

        <form className={styles.loginForm} onSubmit={form.onSubmit}>
          <LoginFields
            emailField={form.register('email')}
            passwordField={form.register('password')}
            emailError={form.errors.email?.message}
            passwordError={form.errors.password?.message}
          />

          <LoginContent control={form.control} />
        </form>
      </Box>

      <LoginFooter title={t('noAccount')} link={t('registration')} />
    </Box>
  );
};
