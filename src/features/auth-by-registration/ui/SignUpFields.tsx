'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { AuthButton, Box, FormInputField } from '@/shared/ui';

import {
  ClientIcon,
  MessageIcon,
  LockIcon,
  ViewOffIcon,
  CalendarIcon,
  ContactIcon,
} from '@/shared/ui/icons';

import styles from './SignUp.module.scss';

export const SignUpFields: FC = () => {
  const { t } = useTranslation('signUpForm');

  return (
    <>
      <FormInputField
        id="fullName"
        label="Full Name"
        inputProps={{ placeholder: 'Enter Full Name' }}
        startIcon={<ClientIcon width={20} height={20} />}
      />
      <FormInputField
        id="email"
        label="Email"
        inputProps={{ placeholder: 'Enter Email' }}
        startIcon={<MessageIcon />}
      />

      <Box className={styles.box}>
        <FormInputField
          id="password"
          label="Password"
          inputProps={{ placeholder: 'Enter Password' }}
          startIcon={<LockIcon />}
          endIcon={<ViewOffIcon />}
        />

        <FormInputField
          id="confirmPassword"
          label="Confirm Password"
          inputProps={{ placeholder: 'Confirm Password' }}
          startIcon={<LockIcon />}
          endIcon={<ViewOffIcon />}
        />
      </Box>

      <Box className={styles.box}>
        <FormInputField
          id="contact"
          label="Contact No"
          startIcon={<ContactIcon />}
          inputProps={{ placeholder: 'Enter Contact No' }}
        />

        <FormInputField
          id="birthDate"
          label="Date of Birth"
          startIcon={<CalendarIcon />}
          inputProps={{ placeholder: 'Select Date of Birth' }}
        />
      </Box>

      <AuthButton label={t('registration')} className={styles.button} />
    </>
  );
};
