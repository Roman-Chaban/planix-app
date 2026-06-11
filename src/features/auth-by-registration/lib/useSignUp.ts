import { useForm } from 'react-hook-form';

export type SignUpFormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  contact: string;
  birthDate: string;
};

export const useSignUp = () => {
  const signUpForm = useForm<SignUpFormValues>({
    mode: 'onBlur',
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
    onSubmit,
  };
};
