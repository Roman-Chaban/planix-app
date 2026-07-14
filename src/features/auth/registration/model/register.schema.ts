import * as z from 'zod';

import { calculateAge, FULL_NAME_REGEX, PASSWORD_REGEX, PHONE_REGEX } from '@/shared/lib';

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, {
        message: 'register.validation.fullName.min',
      })
      .max(50, {
        message: 'register.validation.fullName.max',
      })
      .regex(FULL_NAME_REGEX, {
        message: 'register.validation.fullName.invalid',
      }),

    email: z
      .string()
      .trim()
      .min(1, {
        message: 'register.validation.email.required',
      })
      .email({
        message: 'register.validation.email.invalid',
      }),

    password: z
      .string()
      .min(8, {
        message: 'register.validation.password.min',
      })
      .max(128, {
        message: 'register.validation.password.max',
      })
      .regex(PASSWORD_REGEX, {
        message: 'register.validation.password.weak',
      }),

    confirmPassword: z.string().min(1, {
      message: 'register.validation.confirmPassword.required',
    }),

    contact: z.string().trim().regex(PHONE_REGEX, {
      message: 'register.validation.contact.invalid',
    }),

    birthDate: z.string().min(1, {
      message: 'register.validation.birthDate.required',
    }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'register.validation.confirmPassword.mismatch',
      });
    }

    const birthDate = new Date(data.birthDate);

    if (Number.isNaN(birthDate.getTime())) {
      ctx.addIssue({
        code: 'custom',
        path: ['birthDate'],
        message: 'register.validation.birthDate.invalid',
      });

      return;
    }

    if (birthDate > new Date()) {
      ctx.addIssue({
        code: 'custom',
        path: ['birthDate'],
        message: 'register.validation.birthDate.invalid',
      });

      return;
    }

    if (calculateAge(birthDate) < 18) {
      ctx.addIssue({
        code: 'custom',
        path: ['birthDate'],
        message: 'register.validation.birthDate.age',
      });
    }
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
