import type { TFunction } from 'i18next';

import * as zod from 'zod';

export const loginSchema = (t: TFunction) => {
  return zod.object({
    email: zod
      .string()
      .min(1, t('validation.email.required'))
      .email(t('validation.email.invalid')),

    password: zod
      .string()
      .min(8, t('validation.password.min'))
      .max(72)
      .refine((value) => value.trim() === value, {
        message: t('validation.password.noSpaces'),
      }),

    rememberMe: zod.boolean(),
  });
};

export type LoginSchema = zod.infer<ReturnType<typeof loginSchema>>;
