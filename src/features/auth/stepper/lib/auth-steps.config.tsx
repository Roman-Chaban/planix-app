import type { TFunction } from 'i18next';

import {
  LoginForm,
  ForgotForm,
  RegisterForm,
  ResetForm,
} from '@/features/auth';
import { AUTH_STEPS, type AuthStep } from '@/features/auth/stepper';
import { AuthFooter, AuthHeader, AuthRedirect } from '@/shared/ui';
import { BackIcon } from '@/shared/ui/icons';

const { REGISTER, LOGIN, FORGOT, RESET } = AUTH_STEPS;

export const getAuthSteps = (
  t: TFunction,
  onNavigate: (step: AuthStep) => void,
) => ({
  [LOGIN]: {
    component: () => <LoginForm onNavigate={onNavigate} />,
    header: (
      <AuthHeader
        title={t('login.title')}
        subtitle={t('login.subtitle')}
        highlightedText={t('login.highlightedText')}
        isHighlightedIcon
      />
    ),
    footer: (
      <AuthFooter>
        <AuthRedirect
          title={t('login.noAccount')}
          label={t('login.registration')}
          step={REGISTER}
          onNavigate={onNavigate}
        />
      </AuthFooter>
    ),
  },
  [REGISTER]: {
    component: () => <RegisterForm onNavigate={onNavigate} />,
    header: (
      <AuthHeader
        title={t('register.title')}
        subtitle={t('register.subtitle')}
        isHighlightedIcon
      />
    ),
    footer: (
      <AuthFooter>
        <AuthRedirect
          title={t('register.noAccount')}
          label={t('register.registration')}
          step={REGISTER}
          onNavigate={onNavigate}
        />
      </AuthFooter>
    ),
  },
  [FORGOT]: {
    component: () => <ForgotForm onNavigate={onNavigate} />,
    header: (
      <AuthHeader title={t('forgot.title')} subtitle={t('forgot.subtitle')} />
    ),
    footer: (
      <AuthFooter>
        <AuthRedirect
          title={t('forgot.backTitle')}
          label={t('forgot.backLink')}
          step={LOGIN}
          onNavigate={onNavigate}
          icon={<BackIcon />}
        />
      </AuthFooter>
    ),
  },
  [RESET]: {
    component: () => <ResetForm />,
    header: (
      <AuthHeader title={t('reset.title')} subtitle={t('reset.subtitle')} />
    ),
    footer: (
      <AuthFooter>
        <AuthRedirect
          title={t('reset.backTitle')}
          label={t('reset.backLink')}
          step={LOGIN}
          onNavigate={onNavigate}
          icon={<BackIcon />}
        />
      </AuthFooter>
    ),
  },
});
