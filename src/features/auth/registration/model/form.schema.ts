import * as zod from 'zod';

export const signUpFormSchema = zod
  .object({
    fullName: zod
      .string()
      .trim()
      .min(5, { message: 'validation.fullName.min' })
      .max(25, { message: 'validation.fullName.max' })
      .regex(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s'-]+$/, {
        message: 'validation.fullName.invalid',
      }),

    email: zod.string().email({ message: 'validation.email.invalid' }),

    password: zod
      .string()
      .min(8, { message: 'validation.password.min' })
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)/, {
        message: 'validation.password.weak',
      }),

    confirmPassword: zod.string(),

    contact: zod
      .string()
      .min(10, { message: 'validation.contact.invalid' })
      .max(15, { message: 'validation.contact.invalid' })
      .regex(/^\+?[1-9]\d{1,14}$/, {
        message: 'validation.contact.invalid',
      }),

    birthDate: zod.string().refine(
      (val) => {
        const date = new Date(val);
        const now = new Date();
        return !isNaN(date.getTime()) && date < now;
      },
      { message: 'validation.birthDate.invalid' },
    ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'validation.confirmPassword.mismatch',
    path: ['confirmPassword'],
  });

export type RegisterFormSchema = zod.infer<typeof signUpFormSchema>;
