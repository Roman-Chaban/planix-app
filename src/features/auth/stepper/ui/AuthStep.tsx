import type { AuthStepProps } from '../model/stepper.types';

import type { ReactNode } from 'react';

import { LoginForm } from '../../login';
import { ForgotForm, ResetForm, VerifyForm } from '../../recover-password';
import { RegisterForm } from '../../registration';
import { AUTH_STEPS } from '../lib/stepper.constants';

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
