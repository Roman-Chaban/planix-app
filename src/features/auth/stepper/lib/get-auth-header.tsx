import type { AuthHeaderProps } from '../model/stepper.types';

import type { ReactNode } from 'react';

import { AUTH_STEPS } from '@/shared/lib/common/constants';
import { AuthHeader } from '@/shared/ui';

const { LOGIN, REGISTER, FORGOT, RESET, VERIFY } = AUTH_STEPS;

export const getAuthHeader = ({ activeStep, t }: AuthHeaderProps): ReactNode => {
  switch (activeStep) {
    case LOGIN:
      return (
        <AuthHeader
          title={t('login.title')}
          subtitle={t('login.subtitle')}
          highlightedText={t('login.highlightedText')}
          isHighlightedIcon
        />
      );

    case REGISTER:
      return (
        <AuthHeader
          title={t('register.title')}
          subtitle={t('register.subtitle')}
          isHighlightedIcon
        />
      );

    case FORGOT:
      return <AuthHeader title={t('forgot.title')} subtitle={t('forgot.subtitle')} />;

    case RESET:
      return <AuthHeader title={t('reset.title')} subtitle={t('reset.subtitle')} />;

    case VERIFY:
      return <AuthHeader title={t('verify.title')} subtitle={t('verify.subtitle')} />;
  }
};
