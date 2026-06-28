'use client';

import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import {
  AUTH_STEPS,
  type AuthStep,
  getAuthSteps,
} from '@/features/auth/stepper';

import { useLocalStorage } from '@/shared/lib/hooks';
import { NAMESPACE as NS } from '@/shared/i18n';

import { AuthWrapper } from '@/shared/ui';

const { LOGIN } = AUTH_STEPS;

export const AuthStepper = () => {
  const [step, setStep, hydrated] = useLocalStorage<AuthStep>(
    'auth-step',
    LOGIN,
  );

  const { t } = useTranslation(NS.AUTH);

  const allSteps = getAuthSteps(t, setStep);

  const currentStep = allSteps[step];

  const { component: Component, header, footer } = currentStep;

  useEffect(() => {
    const hash = window.location.hash;

    if (hash.includes('type=recovery')) {
      setStep(AUTH_STEPS.RESET);
    }
  }, [setStep]);

  if (!currentStep) return null;
  if (!hydrated) return null;

  return (
    <AuthWrapper header={header} footer={footer}>
      <Component />
    </AuthWrapper>
  );
};
