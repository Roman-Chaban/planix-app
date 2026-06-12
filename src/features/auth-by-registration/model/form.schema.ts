import type { TFunction } from 'i18next';

import * as zod from 'zod';

export const signUpFormSchema = (t: TFunction) => {
  return zod
    .object({
      fullName: zod
        .string()
        .trim()
        .min(5, { message: t('validation.fullName.min') })
        .max(25, { message: t('validation.fullName.max') })
        .regex(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s'-]+$/, { message: t('validation.fullName.invalid') }),

      email: zod.string().email({ message: t('validation.email.invalid') }),

      password: zod
        .string()
        .min(8, { message: t('validation.password.min') })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
          message: t('validation.password.weak'),
        }),

      confirmPassword: zod.string(),

      contact: zod
        .string()
        .min(10, { message: t('validation.contact.invalid') })
        .max(15, { message: t('validation.contact.invalid') })
        .regex(/^\+?[1-9]\d{1,14}$/, { message: t('validation.contact.invalid') }),

      birthDate: zod.string().refine(
        (val) => {
          const date = new Date(val);
          const now = new Date();
          return !isNaN(date.getTime()) && date < now;
        },
        { message: t('validation.birthDate.invalid') },
      ),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t('validation.confirmPassword.mismatch'),
      path: ['confirmPassword'],
    });
};

export type SignUpFormSchema = zod.infer<ReturnType<typeof signUpFormSchema>>;
