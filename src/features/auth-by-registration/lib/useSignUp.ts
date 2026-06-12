'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { signUpFormSchema, type SignUpFormSchema } from './form.schema';

export type SignUpFormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  contact: string;
  birthDate: string;
};

export const useSignUp = () => {
  const { t } = useTranslation('signUpForm');

  const signUpForm = useForm<SignUpFormSchema>({
    mode: 'onBlur',
    resolver: zodResolver(signUpFormSchema(t)),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      contact: '',
      birthDate: '',
    },
  });

  const onSubmit = signUpForm.handleSubmit((data) => {
    console.log('SignUp Submit:', data);
  });

  return {
    register: signUpForm.register,
    control: signUpForm.control,
    errors: signUpForm.formState.errors,
    isValid: signUpForm.formState.isValid,
    onSubmit,
  };
};
