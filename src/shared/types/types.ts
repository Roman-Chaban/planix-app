import type { TFunction } from 'i18next';

import type { ReactNode } from 'react';

import type { AuthStep } from '@/features/auth/stepper';
import type { Locale } from '@/shared/i18n/locales/locales';

export type TranslateFn = TFunction;
export type AppLocale = Locale;
export type NavigateFn = (step: AuthStep) => void;

export type WithChildren = {
  children?: ReactNode;
};

export type WithClassName = {
  className?: string;
};
