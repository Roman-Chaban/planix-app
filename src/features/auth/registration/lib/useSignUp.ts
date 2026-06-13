'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  signUpFormSchema,
  type SignUpFormSchema,
} from '@/features/auth/registration';

export const useSignUp = () => {
  const signUpForm = useForm<SignUpFormSchema>({
    mode: 'onChange',
    resolver: zodResolver(signUpFormSchema),
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
    formState: signUpForm.formState,
    onSubmit,
  };
};
