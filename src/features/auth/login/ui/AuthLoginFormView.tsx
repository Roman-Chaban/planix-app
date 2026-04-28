'use client';

import type { FC } from 'react';

import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { AuthFooter } from '@/widgets/authLayout/ui/AuthFooter';
import { AuthHeader } from '@/widgets/authLayout/ui/AuthHeader';

import type { AuthLoginFormViewProps } from '@/features/auth/login/model/types/types';

import { BREAKPOINTS } from '@/shared/constants/breakpoints';
import { BUTTON_SIZES, BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/constants/buttons';
import { INPUT_TYPES, INPUT_VARIANTS } from '@/shared/constants/inputs';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { LockIcon, MessageIcon } from '@/shared/ui/icons';
import { Box, Button, Checkbox, AppLink } from '@/shared/ui/index';
import { Input } from '@/shared/ui/input/lib/index';

import styles from './styles.module.scss';

export const AuthLoginFormView: FC<AuthLoginFormViewProps> = ({ register, control, onSubmit }) => {
  const { t } = useTranslation();
  const isMobileLarge = useMediaQuery(BREAKPOINTS.MOBILE_LARGE);
  const BUTTON_RESPONSIVE = isMobileLarge ? BUTTON_SIZES.SMALL : BUTTON_SIZES.MEDIUM;

  return (
    <Box className={styles.loginWrapper}>
      <Box className={styles.loginContent}>
        <AuthHeader
          title={t('AuthLoginForm.header.title')}
          subtitle={t('AuthLoginForm.header.subtitle')}
          decorationText={t('AuthLoginForm.header.decorationText')}
        />

        <form className={styles.loginForm} onSubmit={onSubmit}>
          <Input
            startIcon={<MessageIcon />}
            {...register('email')}
            type={INPUT_TYPES.EMAIL}
            variant={INPUT_VARIANTS.PRIMARY}
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

            <Button
              type={BUTTON_TYPES.SUBMIT}
              variant={BUTTON_VARIANTS.PRIMARY}
              size={BUTTON_RESPONSIVE}
            >
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
