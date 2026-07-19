'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/app/providers/store/hooks';
import { ModalId, openModal } from '@/entities/modal';
import { NAMESPACE as NS } from '@/shared/i18n';

import { buildAuthSearchParams, getAuthStep } from '@/shared/lib';

import { AUTH_STEPS, type AuthStep } from '../lib/stepper.constants';

const { LOGIN, RESET } = AUTH_STEPS;

export const useAuthStepper = () => {
  const [resetEmail, setResetEmail] = useState(() => {
    if (typeof window === 'undefined') {
      return '';
    }

    return sessionStorage.getItem('resetEmail') ?? '';
  });

  const { t } = useTranslation(NS.AUTH);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeStep = getAuthStep(searchParams.get('step'));

  const navigateToStep = useCallback(
    (step: AuthStep) => {
      router.replace(`${pathname}?${buildAuthSearchParams(searchParams, step)}`, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const handleEmailSent = useCallback(
    (email: string) => {
      setResetEmail(email);
      sessionStorage.setItem('resetEmail', email);
      dispatch(openModal(ModalId.VERIFY_EMAIL));
    },
    [dispatch],
  );

  useEffect(() => {
    if (!searchParams.has('step')) {
      navigateToStep(LOGIN);
    }
  }, [searchParams, navigateToStep]);

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.slice(1));

    if (hashParams.get('type') === 'recovery' && activeStep !== RESET) {
      navigateToStep(RESET);
    }
  }, [activeStep, navigateToStep]);

  return {
    activeStep,
    resetEmail,
    navigateToStep,
    handleEmailSent,
    t,
  };
};
