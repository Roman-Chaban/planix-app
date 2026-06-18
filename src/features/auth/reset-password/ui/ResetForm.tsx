'use client';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { AuthFooter, AuthHeader, AuthRedirect, AuthWrapper } from '@/shared/ui';
import { BackIcon } from '@/shared/ui/icons';

const { LOGIN } = ROUTES;

export const ResetForm = () => {
  const { t } = useTranslation(NS.RESET_PASSWORD_FORM);

  const header = <AuthHeader title={t('title')} subtitle={t('subtitle')} />;

  const footer = (
    <AuthFooter>
      <AuthRedirect
        title={t('backTitle')}
        linkText={t('backLink')}
        href={LOGIN}
        icon={<BackIcon />}
      />
    </AuthFooter>
  );

  return <AuthWrapper header={header} footer={footer} />;
};
