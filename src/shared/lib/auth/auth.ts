import type { ReadonlyURLSearchParams } from 'next/navigation';

import { AUTH_STEPS, type AuthStep } from '@/features/auth/stepper';

import { AUTH_STEP_VALUES } from '../common';

const { LOGIN } = AUTH_STEPS;

export const isAuthStep = (value: string | null): value is AuthStep => {
  return value !== null && AUTH_STEP_VALUES.has(value);
};

export const getAuthStep = (value: string | null, fallback: AuthStep = LOGIN): AuthStep => {
  return isAuthStep(value) ? value : fallback;
};

export const buildAuthSearchParams = (searchParams: ReadonlyURLSearchParams, step: AuthStep) => {
  const params = new URLSearchParams(searchParams);

  params.set('step', step);

  return params.toString();
};
