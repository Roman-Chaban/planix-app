'use client';

import { type Control, Controller } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import styles from '@/features/auth-by-credentials/Auth.module.scss';
import type { AuthFormValues } from '@/features/auth-by-credentials/AuthByCredentials.types';
import { useMediaQuery } from '@/shared/lib/hooks/index';
import { BUTTON_SIZES, BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/ui/button/Button.constants';
import { Box, Button, Checkbox, AppLink } from '@/shared/ui/index';
import { BREAKPOINTS } from '@/shared/ui/theme/breakpoints';

const { SUBMIT } = BUTTON_TYPES;
const { DEFAULT } = BUTTON_VARIANTS;
const { MOBILE_LARGE } = BREAKPOINTS;
const { SMALL, MEDIUM } = BUTTON_SIZES;

export const LoginMain = ({ control }: { control: Control<AuthFormValues> }) => {
  const { t } = useTranslation();
  const isMobileLargeScreen = useMediaQuery(MOBILE_LARGE);

  const SUBMIT_BUTTON_SIZES = isMobileLargeScreen ? SMALL : MEDIUM;

  return (
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

        {/* TODO: [Added the correct link when it will need] */}
        <AppLink href="/#" className={styles.loginFormLink}>
          {t('AuthLoginForm.form.links.forgotPassword')}
        </AppLink>
      </Box>

      <Button type={SUBMIT} variant={DEFAULT} size={SUBMIT_BUTTON_SIZES} className={styles.button}>
        {t('AuthLoginForm.form.submit.button')}
      </Button>
    </Box>
  );
};
