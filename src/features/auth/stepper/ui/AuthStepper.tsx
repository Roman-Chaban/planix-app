'use client';

import { AuthWrapper } from '@/shared/ui';

import { ForgotModal } from '../../recover-password/forgot/ui/forgot-modal';
import { getAuthFooter } from '../lib/get-auth-footer';
import { getAuthHeader } from '../lib/get-auth-header';
import { useAuthStepper } from '../model/useAuthStepper';

import { AuthStep } from './AuthStep';

export const AuthStepper = () => {
  const { activeStep, resetEmail, navigateToStep, handleEmailSent, t } = useAuthStepper();

  const header = getAuthHeader({
    activeStep,
    t,
  });

  const footer = getAuthFooter({
    activeStep,
    navigateToStep,
    t,
  });

  return (
    <AuthWrapper header={header} footer={footer}>
      <AuthStep step={activeStep} onNavigate={navigateToStep} onEmailSent={handleEmailSent} />

      <ForgotModal email={resetEmail} />
    </AuthWrapper>
  );
};
