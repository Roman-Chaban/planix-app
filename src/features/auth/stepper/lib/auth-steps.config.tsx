import { LoginForm, ForgotForm, RegisterForm, ResetForm, VerifyForm } from '@/features/auth';
import type { NavigateFn, TranslateFn } from '@/shared/types/types';
import { AuthFooter, AuthHeader, AuthRedirect } from '@/shared/ui';
import { BackIcon } from '@/shared/ui/icons';

import { AUTH_STEPS } from './constants';

const { REGISTER, LOGIN, FORGOT, RESET, VERIFY } = AUTH_STEPS;

export const getAuthSteps = (t: TranslateFn, onNavigate: NavigateFn) => ({
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
    component: () => <RegisterForm />,
    header: (
      <AuthHeader title={t('register.title')} subtitle={t('register.subtitle')} isHighlightedIcon />
    ),
    footer: (
      <AuthFooter>
        <AuthRedirect
          title={t('register.noAccount')}
          label={t('register.logIn')}
          step={LOGIN}
          onNavigate={onNavigate}
        />
      </AuthFooter>
    ),
  },
  [FORGOT]: {
    component: () => <ForgotForm onNavigate={onNavigate} />,
    header: <AuthHeader title={t('forgot.title')} subtitle={t('forgot.subtitle')} />,
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
    component: () => <ResetForm onNavigate={onNavigate} />,
    header: <AuthHeader title={t('reset.title')} subtitle={t('reset.subtitle')} />,
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
  [VERIFY]: {
    component: () => <VerifyForm onNavigate={onNavigate} />,
    header: <AuthHeader title={t('verify.title')} subtitle={t('verify.subtitle')} />,
    footer: (
      <AuthFooter>
        <AuthRedirect
          title={t('verify.backTitle')}
          label={t('verify.backLink')}
          step={LOGIN}
          onNavigate={onNavigate}
          icon={<BackIcon />}
        />
      </AuthFooter>
    ),
  },
});
