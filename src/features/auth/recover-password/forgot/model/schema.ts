import * as zod from 'zod';

export const forgotPasswordSchema = zod.object({
  email: zod.string().email({ message: 'forgot.validation.email.invalid' }),
});

export type ForgotPasswordSchema = zod.infer<typeof forgotPasswordSchema>;
