import type { AuthFooterProps } from '../model/stepper.types';

import type { ReactNode } from 'react';

import { AUTH_STEPS } from '@/shared/lib/common/constants';
import { AuthFooter, AuthRedirect } from '@/shared/ui';

import { BackIcon } from '@/shared/ui/icons';

const { LOGIN, REGISTER, FORGOT, RESET, VERIFY } = AUTH_STEPS;

export const getAuthFooter = ({ activeStep, navigateToStep, t }: AuthFooterProps): ReactNode => {
  switch (activeStep) {
    case LOGIN: {
      return (
        <AuthFooter>
          <AuthRedirect
            title={t('login.noAccount')}
            label={t('login.registration')}
            step={REGISTER}
            onNavigate={navigateToStep}
          />
        </AuthFooter>
      );
    }

    case REGISTER: {
      return (
        <AuthFooter>
          <AuthRedirect
            title={t('register.noAccount')}
            label={t('register.logIn')}
            step={LOGIN}
            onNavigate={navigateToStep}
          />
        </AuthFooter>
      );
    }

    case FORGOT: {
      return (
        <AuthFooter>
          <AuthRedirect
            title={t('forgot.backTitle')}
            label={t('forgot.backLink')}
            step={LOGIN}
            onNavigate={navigateToStep}
            icon={<BackIcon />}
          />
        </AuthFooter>
      );
    }

    case RESET: {
      return (
        <AuthFooter>
          <AuthRedirect
            title={t('reset.backTitle')}
            label={t('reset.backLink')}
            step={LOGIN}
            onNavigate={navigateToStep}
            icon={<BackIcon />}
          />
        </AuthFooter>
      );
    }

    case VERIFY: {
      return (
        <AuthFooter>
          <AuthRedirect
            title={t('verify.backTitle')}
            label={t('verify.backLink')}
            step={LOGIN}
            onNavigate={navigateToStep}
            icon={<BackIcon />}
          />
        </AuthFooter>
      );
    }

    default:
      return null;
  }
};
