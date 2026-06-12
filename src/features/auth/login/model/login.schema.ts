import type { TFunction } from 'i18next';

import * as zod from 'zod';

export const loginSchema = (t: TFunction) => {
  return zod.object({
    email: zod
      .string()
      .min(1, { message: t('validation.email.required') })
      .email({ message: t('validation.email.invalid') }),
    password: zod.string().min(8, { message: t('validation.password.min') }),
    rememberMe: zod.boolean().optional(),
  });
};

export type LoginSchema = zod.infer<ReturnType<typeof loginSchema>>;
