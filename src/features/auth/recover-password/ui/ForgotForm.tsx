'use client';

import type { SubmitHandler } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import {
  type ForgotPasswordSchema,
  forgotPasswordSchema,
  registerFormFields,
} from '@/features/auth/recover-password';
import { useAppForm } from '@/shared/lib/hooks';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import {
  AppForm,
  AuthButton,
  AuthFooter,
  AuthHeader,
  AuthRedirect,
  AuthWrapper,
  FormFields,
} from '@/shared/ui';
import { BUTTON_MAX_WIDTH } from '@/shared/ui/button';
import { BackIcon } from '@/shared/ui/icons';

const { LOGIN } = ROUTES;
const { MD } = BUTTON_MAX_WIDTH;

export const ForgotForm = () => {
  const { t } = useTranslation(NS.FORGOT_PASSWORD_FORM);

  const form = useAppForm<ForgotPasswordSchema>({
    schema: forgotPasswordSchema,
    defaultValues: {
      email: '',
    },
  });

  const {
    formState: { isValid },
  } = form;

  // TODO: [Waiting for form implementation]
  const onSubmit: SubmitHandler<ForgotPasswordSchema> = (data) => {
    console.log('Login Form Data:', data);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <AuthWrapper
        header={<AuthHeader title={t('title')} subtitle={t('subtitle')} />}
        footer={
          <AuthFooter>
            <AuthRedirect
              title={t('backTitle')}
              linkText={t('backLink')}
              href={LOGIN}
              icon={<BackIcon />}
            />
          </AuthFooter>
        }
      >
        <FormFields
          fields={registerFormFields}
          translationNamespace={NS.FORGOT_PASSWORD_FORM}
        />

        <AuthButton label={t('button')} disabled={!isValid} maxWidth={MD} />
      </AuthWrapper>
    </AppForm>
  );
};
