import * as zod from 'zod';

export const loginSchema = zod.object({
  email: zod
    .string()
    .min(1, 'validation.email.required')
    .email('validation.email.invalid'),

  password: zod
    .string()
    .min(8, 'validation.password.min')
    .max(72)
    .refine((value) => value.trim() === value, {
      message: 'validation.password.noSpaces',
    }),

  rememberMe: zod.boolean(),
});

export type LoginFormSchema = zod.infer<typeof loginSchema>;
