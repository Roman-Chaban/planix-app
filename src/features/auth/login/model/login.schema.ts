import * as zod from 'zod';

export const loginSchema = zod.object({
  email: zod
    .string()
    .min(1, 'login.validation.email.required')
    .email('login.validation.email.invalid'),

  password: zod
    .string()
    .min(8, 'login.validation.password.min')
    .max(72)
    .refine((value) => value.trim() === value, {
      message: 'login.validation.password.noSpaces',
    }),

  rememberMe: zod.boolean(),
});

export type LoginFormSchema = zod.infer<typeof loginSchema>;
