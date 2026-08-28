import type { AuthStepProps } from '../model/stepper.types';

import type { ReactNode } from 'react';

import { AUTH_STEPS } from '@/shared/lib/common/constants';

import { LoginForm } from '../../login';
import { ForgotForm, ResetForm, VerifyForm } from '../../recover-password';
import { RegisterForm } from '../../registration';

const { LOGIN, REGISTER, FORGOT, RESET, VERIFY } = AUTH_STEPS;

export const AuthStep = ({ step, onNavigate, onEmailSent }: AuthStepProps): ReactNode => {
  switch (step) {
    case LOGIN: {
      return <LoginForm onNavigate={onNavigate} />;
    }

    case REGISTER: {
      return <RegisterForm />;
    }

    case FORGOT: {
      return <ForgotForm onNavigate={onNavigate} onEmailSent={onEmailSent} />;
    }

    case RESET: {
      return <ResetForm onNavigate={onNavigate} />;
    }

    case VERIFY: {
      return <VerifyForm onNavigate={onNavigate} />;
    }

    default:
      return null;
  }
};
