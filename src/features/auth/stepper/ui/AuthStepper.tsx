'use client';

import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import {
  AUTH_STEPS,
  type AuthStep,
  getAuthSteps,
} from '@/features/auth/stepper';

import { NAMESPACE as NS } from '@/shared/lib/i18n';

import { AuthLayout, AuthWrapper } from '@/shared/ui';

const { LOGIN } = AUTH_STEPS;

export const AuthStepper = () => {
  const [step, setStep] = useState<AuthStep>(LOGIN);
  const { t } = useTranslation(NS.AUTH);

  const allSteps = getAuthSteps(t, setStep);

  const currentStep = allSteps[step];

  const { component: Component, header, footer } = currentStep;

  useEffect(() => {
    const hash = window.location.hash;

    /* eslint-disable react-hooks/set-state-in-effect */
    if (hash.includes('type=recovery')) {
      setStep(AUTH_STEPS.RESET);
    }
  }, []);

  if (!currentStep) return null;

  return (
    <AuthLayout>
      <AuthWrapper header={header} footer={footer}>
        <Component />
      </AuthWrapper>
    </AuthLayout>
  );
};
