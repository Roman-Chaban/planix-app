'use client';

import { useCallback, useEffect, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';

import { buildAuthSearchParams, getAuthStep } from '@/shared/lib';

import { getAuthSteps } from '../lib/auth-steps.config';
import { AUTH_STEPS, type AuthStep } from '../lib/stepper.constants';

const { LOGIN, RESET } = AUTH_STEPS;

export const useAuthStepper = () => {
  const { t } = useTranslation(NS.AUTH);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeStep = getAuthStep(searchParams.get('step'));

  const setStep = useCallback(
    (step: AuthStep) => {
      router.replace(`${pathname}?${buildAuthSearchParams(searchParams, step)}`, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  useEffect(() => {
    if (searchParams.has('step')) {
      return;
    }

    setStep(LOGIN);
  }, [searchParams, setStep]);

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.slice(1));

    if (hashParams.get('type') === 'recovery' && activeStep !== RESET) {
      setStep(RESET);
    }
  }, [activeStep, setStep]);

  const steps = useMemo(() => getAuthSteps(t, setStep), [t, setStep]);

  const currentStep = steps[activeStep];

  return {
    Component: currentStep.component,
    header: currentStep.header,
    footer: currentStep.footer,
    activeStep,
    currentStep,
    setStep,
  };
};
