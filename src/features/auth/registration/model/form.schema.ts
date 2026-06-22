import * as zod from 'zod';

export const signUpFormSchema = zod
  .object({
    fullName: zod
      .string()
      .trim()
      .min(5, { message: 'register.validation.fullName.min' })
      .max(25, { message: 'register.validation.fullName.max' })
      .regex(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s'-]+$/, {
        message: 'register.validation.fullName.invalid',
      }),

    email: zod.string().email({ message: 'register.validation.email.invalid' }),

    password: zod
      .string()
      .min(8, { message: 'register.validation.password.min' })
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)/, {
        message: 'register.validation.password.weak',
      }),

    confirmPassword: zod.string(),

    contact: zod
      .string()
      .min(10, { message: 'register.validation.contact.invalid' })
      .max(15, { message: 'register.validation.contact.invalid' })
      .regex(/^\+?[1-9]\d{1,14}$/, {
        message: 'register.validation.contact.invalid',
      }),

    birthDate: zod.string().refine(
      (val) => {
        const date = new Date(val);
        const now = new Date();
        return !isNaN(date.getTime()) && date < now;
      },
      { message: 'register.validation.birthDate.invalid' },
    ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'register.validation.confirmPassword.mismatch',
    path: ['confirmPassword'],
  });

export type RegisterFormSchema = zod.infer<typeof signUpFormSchema>;
