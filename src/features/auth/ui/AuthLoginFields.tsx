import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import type { AuthLoginFieldsProps } from '@/features/auth/model/types';
import { ICON_POSITION } from '@/shared/constants/common';
import { INPUT_TYPES, INPUT_VARIANTS } from '@/shared/constants/inputs';
import { usePasswordToggle } from '@/shared/hooks/usePasswordToggle';
import { FormError, FormField, FormIcon, FormLabel, FormWrapper } from '@/shared/ui/form-field';
import { EyeIcon, EyeOffIcon, LockIcon, MessageIcon } from '@/shared/ui/icons';
import { Input } from '@/shared/ui/input/ui/Input';

const { EMAIL, PASSWORD, TEXT } = INPUT_TYPES;
const { DEFAULT } = INPUT_VARIANTS;
const { START, END } = ICON_POSITION;

export const AuthLoginFields: FC<AuthLoginFieldsProps> = ({ register, errors }) => {
  const { t } = useTranslation();
  const { isVisible, toggle } = usePasswordToggle();

  return (
    <>
      <FormField variant={DEFAULT} error={errors.email?.message}>
        <FormLabel>{t('AuthLoginForm.form.email.label')}</FormLabel>
        <FormWrapper>
          <FormIcon position={START}>
            <MessageIcon />
          </FormIcon>
          <Input
            {...register('email')}
            type={EMAIL}
            placeholder={t('AuthLoginForm.form.email.placeholder')}
            autoComplete="email"
          />
        </FormWrapper>
        <FormError />
      </FormField>

      <FormField variant={DEFAULT} error={errors.password?.message}>
        <FormLabel>{t('AuthLoginForm.form.password.label')}</FormLabel>
        <FormWrapper>
          <FormIcon position={START}>
            <LockIcon />
          </FormIcon>
          <Input
            {...register('password')}
            type={isVisible ? TEXT : PASSWORD}
            placeholder={t('AuthLoginForm.form.password.placeholder')}
            autoComplete="current-password"
          />
          <FormIcon position={END} onClick={toggle}>
            {isVisible ? <EyeOffIcon /> : <EyeIcon />}
          </FormIcon>
        </FormWrapper>
        <FormError />
      </FormField>
    </>
  );
};
