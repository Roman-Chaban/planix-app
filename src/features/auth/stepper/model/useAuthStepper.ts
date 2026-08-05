'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { closeModal, ModalId, openModal } from '@/entities/modal';
import { NAMESPACE as NS } from '@/shared/i18n';

import { buildAuthSearchParams, clearRecoveryState, getAuthStep } from '@/shared/lib';
import { useAppDispatch } from '@/shared/providers/store/hooks';

import { AUTH_STEPS, type AuthStep } from '../lib/stepper.constants';

import { usePasswordRecovery } from './usePasswordRecovery';

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
    const hashParams = new URLSearchParams(window.location.hash.slice(1));

    if (hashParams.get('type') !== 'recovery') {
      return;
    }

    dispatch(closeModal());
    clearRecoveryState();

    if (activeStep !== RESET) {
      navigateToStep(RESET);
    }
  }, [activeStep, dispatch, navigateToStep]);

  usePasswordRecovery();

  useEffect(() => {
    if (!searchParams.has('step')) {
      navigateToStep(LOGIN);
    }
  }, [searchParams, navigateToStep]);

  return {
    activeStep,
    resetEmail,
    navigateToStep,
    handleEmailSent,
    t,
  };
};
