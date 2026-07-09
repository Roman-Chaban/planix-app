'use client';

import type { FC } from 'react';

import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { AuthFooter } from '@/widgets/auth/ui/AuthFooter';
import { AuthHeader } from '@/widgets/auth/ui/AuthHeader';

import type { AuthLoginFormViewProps } from '@/features/auth/login/model/types/types';

import { BREAKPOINTS } from '@/shared/constants/breakpoints';
import { BUTTON_SIZES, BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/constants/buttons';
import { INPUT_TYPES, INPUT_VARIANTS } from '@/shared/constants/inputs';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { LockIcon, MessageIcon } from '@/shared/ui/icons';
import { Box, Button, Checkbox, AppLink } from '@/shared/ui/index';
import { Input } from '@/shared/ui/input/lib/index';

import styles from './styles.module.scss';

const { MOBILE_LARGE } = BREAKPOINTS;
const { SMALL, MEDIUM } = BUTTON_SIZES;
const { EMAIL } = INPUT_TYPES;
const { SUBMIT } = BUTTON_TYPES;
const { PRIMARY: INPUT_PRIMARY } = INPUT_VARIANTS;
const { PRIMARY: BUTTON_PRIMARY } = BUTTON_VARIANTS;

export const AuthLoginFormView: FC<AuthLoginFormViewProps> = ({ register, control, onSubmit }) => {
  const { t } = useTranslation();

  const isMobileLargeScreen = useMediaQuery(MOBILE_LARGE);

  const SUBMIT_BUTTON_SIZES = isMobileLargeScreen ? SMALL : MEDIUM;

  return (
    <Box className={styles.loginWrapper}>
      <Box className={styles.loginContent}>
        <AuthHeader
          title={t('AuthLoginForm.header.title')}
          subtitle={t('AuthLoginForm.header.subtitle')}
          highlightedText={t('AuthLoginForm.header.decorationText')}
        />

        <form className={styles.loginForm} onSubmit={onSubmit}>
          <Input
            startIcon={<MessageIcon />}
            {...register('email')}
            type={EMAIL}
            variant={INPUT_PRIMARY}
            placeholder={t('AuthLoginForm.form.email.placeholder')}
            label={t('AuthLoginForm.form.email.label')}
            autoComplete="email"
          />

          <Input.Password
            startIcon={<LockIcon />}
            {...register('password')}
            placeholder={t('AuthLoginForm.form.password.placeholder')}
            label={t('AuthLoginForm.form.password.label')}
          />

          <Box className={styles.loginFormMainWrapper}>
            <Box className={styles.loginFormMain}>
              <Controller
                name="checked"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onChange={field.onChange}
                    label={t('AuthLoginForm.form.checkbox.rememberMe')}
                  />
                )}
              />

              {/* Mock: [Added the correct link when it will need] */}
              <AppLink href="/#" className={styles.loginFormLink}>
                {t('AuthLoginForm.form.links.forgotPassword')}
              </AppLink>
            </Box>

            <Button type={SUBMIT} variant={BUTTON_PRIMARY} size={SUBMIT_BUTTON_SIZES}>
              {t('AuthLoginForm.form.submit.button')}
            </Button>
          </Box>
        </form>
      </Box>

      <AuthFooter
        title={t('AuthLoginForm.footer.noAccount')}
        link={t('AuthLoginForm.footer.registration')}
      />
    </Box>
  );
};
