import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { useLocalStorage } from '@/shared/lib/hooks';

import { getAuthSteps } from '../lib/auth-steps.config';
import { AUTH_STEPS, type AuthStep } from '../lib/constants';

const { LOGIN } = AUTH_STEPS;

export const useAuthStepper = () => {
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

  return { header, footer, Component, hydrated, currentStep };
};
