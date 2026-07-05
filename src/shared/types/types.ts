import type { TFunction } from 'i18next';

import type { FC, ReactNode, SVGProps } from 'react';

import type { AuthStep } from '@/features/auth/stepper';
import type { Locale } from '@/shared/i18n/locales/locales';

export type TranslateFn = TFunction;
export type AppLocale = Locale;
export type NavigateFn = (step: AuthStep) => void;
export type SVGComponent = FC<SVGProps<SVGSVGElement>>;

export type WithChildren = {
  children?: ReactNode;
};

export type WithClassName = {
  className?: string;
};

export type WithSkeleton = {
  skeleton: ReactNode;
};
