import type { TFunction } from 'i18next';

import * as zod from 'zod';

export const forgotPasswordSchema = (t: TFunction) => {
  return zod.object({
    email: zod.string().email({ message: t('validation.email.invalid') }),
  });
};

export type ForgotPasswordSchema = zod.infer<
  ReturnType<typeof forgotPasswordSchema>
>;
