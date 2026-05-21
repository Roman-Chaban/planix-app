import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { LoginFormFieldsProps } from '@/features/auth-by-credentials/model/types';
import { usePasswordToggle } from '@/features/auth-by-credentials/model/usePasswordToggle';
import { ICON_POSITION } from '@/shared/constants';
import { FormError, FormField, FormIcon, FormLabel, FormWrapper } from '@/shared/ui/form-field';
import { EyeIcon, EyeOffIcon, LockIcon, MessageIcon } from '@/shared/ui/icons';
import { Input } from '@/shared/ui/input/Input';
import { INPUT_TYPES, INPUT_VARIANTS } from '@/shared/ui/input/Input.constants';

const { EMAIL, PASSWORD, TEXT } = INPUT_TYPES;
const { DEFAULT } = INPUT_VARIANTS;
const { START, END } = ICON_POSITION;

export const LoginFormFields: FC<LoginFormFieldsProps> = ({
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
        <FormLabel htmlFor="email">{t('auth.login.email.label')}</FormLabel>

        <FormWrapper variant={DEFAULT} error={emailError}>
          <FormIcon position={START}>
            <MessageIcon />
          </FormIcon>

          <Input
            id="email"
            {...emailField}
            type={EMAIL}
            placeholder={t('auth.login.email.placeholder')}
            autoComplete="email"
            aria-invalid={Boolean(emailError)}
          />
        </FormWrapper>

        <FormError error={emailError} />
      </FormField>

      <FormField>
        <FormLabel htmlFor="password">{t('auth.login.password.label')}</FormLabel>

        <FormWrapper variant={DEFAULT} error={passwordError}>
          <FormIcon position={START}>
            <LockIcon />
          </FormIcon>

          <Input
            id="password"
            {...passwordField}
            type={isVisible ? TEXT : PASSWORD}
            placeholder={t('auth.login.password.placeholder')}
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
