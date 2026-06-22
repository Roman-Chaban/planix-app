import type { TFunction } from 'i18next';

import { LoginForm } from '@/features/auth/login';
import { ForgotForm } from '@/features/auth/recover-password';
import { RegisterForm } from '@/features/auth/registration';
import { ResetForm } from '@/features/auth/reset-password';
import { AUTH_STEPS, type AuthStep } from '@/features/auth/stepper';
import { AuthFooter, AuthHeader, AuthRedirect } from '@/shared/ui';
import { BackIcon } from '@/shared/ui/icons';

const { REGISTER, LOGIN } = AUTH_STEPS;

export const getAuthSteps = (
  t: TFunction,
  onNavigate: (step: AuthStep) => void,
) => ({
  [AUTH_STEPS.LOGIN]: {
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
  [AUTH_STEPS.REGISTER]: {
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
  [AUTH_STEPS.FORGOT]: {
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
  [AUTH_STEPS.RESET]: {
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
