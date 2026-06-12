'use client';

import { useTranslation } from 'react-i18next';

import { useSignUp } from '@/features/auth-by-registration';
import { AuthButton, Box, FormInputField } from '@/shared/ui';

import {
  ClientIcon,
  MessageIcon,
  LockIcon,
  ViewOffIcon,
  CalendarIcon,
  ContactIcon,
} from '@/shared/ui/icons';

import { INPUT_TYPES } from '@/shared/ui/input';

import styles from './SignUp.module.scss';

const { EMAIL, PASSWORD, TEXT } = INPUT_TYPES;

export const SignUpFields = () => {
  const { t } = useTranslation('signUpForm');

  const { register, errors, isValid } = useSignUp();

  return (
    <>
      <FormInputField
        id="fullName"
        label={t('fullName')}
        startIcon={<ClientIcon width={20} height={20} />}
        error={errors.fullName?.message}
        inputProps={{
          ...register('fullName'),
          type: TEXT,
          placeholder: t('fullNamePlaceholder'),
          autoComplete: 'name',
        }}
      />

      <FormInputField
        id="email"
        label={t('email')}
        startIcon={<MessageIcon />}
        error={errors.email?.message}
        inputProps={{
          ...register('email'),
          type: EMAIL,
          placeholder: t('emailPlaceholder'),
          autoComplete: 'email',
        }}
      />

      <Box className={styles.box}>
        <FormInputField
          id="password"
          label={t('password')}
          startIcon={<LockIcon />}
          endIcon={<ViewOffIcon />}
          error={errors.password?.message}
          inputProps={{
            ...register('password'),
            type: PASSWORD,
            placeholder: t('passwordPlaceholder'),
            autoComplete: 'new-password',
          }}
        />

        <FormInputField
          id="confirmPassword"
          label={t('confirmPassword')}
          startIcon={<LockIcon />}
          endIcon={<ViewOffIcon />}
          error={errors.confirmPassword?.message}
          inputProps={{
            ...register('confirmPassword'),
            type: PASSWORD,
            placeholder: t('confirmPasswordPlaceholder'),
            autoComplete: 'new-password',
          }}
        />
      </Box>

      <Box className={styles.box}>
        <FormInputField
          id="contact"
          label={t('contact')}
          startIcon={<ContactIcon />}
          error={errors.contact?.message}
          inputProps={{
            ...register('contact'),
            type: TEXT,
            placeholder: t('contactPlaceholder'),
            autoComplete: 'tel',
          }}
        />

        <FormInputField
          id="birthDate"
          label={t('birthDate')}
          startIcon={<CalendarIcon />}
          error={errors.birthDate?.message}
          inputProps={{
            ...register('birthDate'),
            type: TEXT,
            placeholder: t('birthDatePlaceholder'),
            autoComplete: 'bday',
          }}
        />
      </Box>

      <AuthButton label={t('registration')} disabled={!isValid} />
    </>
  );
};
