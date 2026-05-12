import { Controller, type Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { AuthFormValues } from '@/features/auth/model/types';
import styles from '@/features/auth/styles/auth.module.scss';
import { BREAKPOINTS } from '@/shared/constants/breakpoints';
import { BUTTON_SIZES, BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/constants/buttons';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { Box, Button, Checkbox, AppLink } from '@/shared/ui/index';

const { SUBMIT } = BUTTON_TYPES;
const { DEFAULT } = BUTTON_VARIANTS;
const { MOBILE_LARGE } = BREAKPOINTS;
const { SMALL, MEDIUM } = BUTTON_SIZES;

export const AuthLoginMain = ({ control }: { control: Control<AuthFormValues> }) => {
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

        {/* Mock: [Added the correct link when it will need] */}
        <AppLink href="/#" className={styles.loginFormLink}>
          {t('AuthLoginForm.form.links.forgotPassword')}
        </AppLink>
      </Box>

      <Button type={SUBMIT} variant={DEFAULT} size={SUBMIT_BUTTON_SIZES}>
        {t('AuthLoginForm.form.submit.button')}
      </Button>
    </Box>
  );
};
