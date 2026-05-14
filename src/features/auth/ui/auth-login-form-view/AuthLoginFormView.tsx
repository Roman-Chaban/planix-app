'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AuthFooter } from '@/widgets/auth/ui/auth-footer/AuthFooter';
import { AuthHeader } from '@/widgets/auth/ui/auth-header/AuthHeader';

import type { AuthLoginFormViewProps } from '@/features/auth/model/types';

import styles from '@/features/auth/styles/auth.module.scss';

import { AuthLoginFields } from '@/features/auth/ui/auth-login-fields/AuthLoginFields';
import { AuthLoginMain } from '@/features/auth/ui/auth-login-main/AuthLoginMain';
import { Box } from '@/shared/ui/index';

export const AuthLoginFormView: FC<AuthLoginFormViewProps> = ({
  onSubmit,
  emailField,
  passwordField,
  emailError,
  passwordError,
  control,
}) => {
  const { t } = useTranslation();

  return (
    <Box className={styles.loginWrapper}>
      <Box className={styles.loginContent}>
        <AuthHeader
          title={t('AuthLoginForm.header.title')}
          subtitle={t('AuthLoginForm.header.subtitle')}
          highlightedText={t('AuthLoginForm.header.decorationText')}
        />

        <form className={styles.loginForm} onSubmit={onSubmit}>
          <AuthLoginFields
            emailField={emailField}
            passwordField={passwordField}
            emailError={emailError}
            passwordError={passwordError}
          />

          <AuthLoginMain control={control} />
        </form>
      </Box>

      <AuthFooter
        title={t('AuthLoginForm.footer.noAccount')}
        link={t('AuthLoginForm.footer.registration')}
      />
    </Box>
  );
};
