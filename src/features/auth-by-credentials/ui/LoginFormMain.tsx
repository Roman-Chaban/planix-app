'use client';

import type { FC } from 'react';
import { Controller } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import type { LoginFormMainProps } from '@/features/auth-by-credentials/model/types';

import { useMediaQuery } from '@/shared/lib/hooks';
import { Box, Button, Checkbox, AppLink } from '@/shared/ui';
import {
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button/model/constants';
import { BREAKPOINTS } from '@/shared/ui/theme/model/breakpoints';

import styles from './LoginForm.module.scss';

const { SUBMIT } = BUTTON_TYPES;
const { DEFAULT } = BUTTON_VARIANTS;
const { MOBILE_LARGE } = BREAKPOINTS;
const { SMALL, MEDIUM } = BUTTON_SIZES;
const { ROUNDED } = BUTTON_SHAPES;

export const LoginFormMain: FC<LoginFormMainProps> = ({ control }) => {
  const { t } = useTranslation('login');
  const isMobileLargeScreen = useMediaQuery(MOBILE_LARGE);

  const buttonSizes = isMobileLargeScreen ? SMALL : MEDIUM;

  return (
    <Box className={styles.loginFormMainWrapper}>
      <Box className={styles.loginFormMain}>
        <Controller
          name="checked"
          control={control}
          render={({ field }) => (
            <Checkbox checked={field.value} onChange={field.onChange} label={t('rememberMe')} />
          )}
        />

        {/* TODO: [Added the correct link when it will need] */}
        <AppLink href="/#" className={styles.loginFormLink}>
          {t('forgotPassword')}
        </AppLink>
      </Box>

      <Box className={styles.buttonWrapper}>
        <Button type={SUBMIT} variant={DEFAULT} size={buttonSizes} shape={ROUNDED} fullWidth>
          {t('submitButton')}
        </Button>
      </Box>
    </Box>
  );
};
