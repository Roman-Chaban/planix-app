import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { usePasswordToggle } from '@/features/auth-by-credentials/hooks/usePasswordToggle';
import type { AuthLoginFieldsProps } from '@/features/auth-by-credentials/model/auth-by-credentials.types';
import { ICON_POSITION } from '@/shared/config/common/common';
import { INPUT_TYPES, INPUT_VARIANTS } from '@/shared/config/ui/inputs';
import { FormError, FormField, FormIcon, FormLabel, FormWrapper } from '@/shared/ui/form-field';
import { EyeIcon, EyeOffIcon, LockIcon, MessageIcon } from '@/shared/ui/icons';
import { Input } from '@/shared/ui/input/Input';

const { EMAIL, PASSWORD, TEXT } = INPUT_TYPES;
const { DEFAULT } = INPUT_VARIANTS;
const { START, END } = ICON_POSITION;

export const LoginFields: FC<AuthLoginFieldsProps> = ({
  emailField,
  passwordField,
  emailError,
  passwordError,
}) => {
  const { t } = useTranslation();
  const { isVisible, toggle } = usePasswordToggle();

  return (
    <>
      <FormField>
        <FormLabel htmlFor="email">{t('AuthLoginForm.form.email.label')}</FormLabel>

        <FormWrapper variant={DEFAULT} error={emailError}>
          <FormIcon position={START}>
            <MessageIcon />
          </FormIcon>

          <Input
            id="email"
            {...emailField}
            type={EMAIL}
            placeholder={t('AuthLoginForm.form.email.placeholder')}
            autoComplete="email"
            aria-invalid={Boolean(emailError)}
          />
        </FormWrapper>

        <FormError error={emailError} />
      </FormField>

      <FormField>
        <FormLabel htmlFor="password">{t('AuthLoginForm.form.password.label')}</FormLabel>

        <FormWrapper variant={DEFAULT} error={passwordError}>
          <FormIcon position={START}>
            <LockIcon />
          </FormIcon>

          <Input
            id="password"
            {...passwordField}
            type={isVisible ? TEXT : PASSWORD}
            placeholder={t('AuthLoginForm.form.password.placeholder')}
            autoComplete="current-password"
            aria-invalid={Boolean(passwordError)}
          />

          <FormIcon position={END} onClick={toggle}>
            {isVisible ? <EyeOffIcon /> : <EyeIcon />}
          </FormIcon>
        </FormWrapper>

        <FormError error={passwordError} />
      </FormField>
    </>
  );
};
