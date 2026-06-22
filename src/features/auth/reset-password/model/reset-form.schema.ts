import * as zod from 'zod';

export const resetSchema = zod
  .object({
    newPassword: zod
      .string()
      .min(1, 'reset.validation.required')
      .min(8, 'reset.validation.minPassword'),
    confirmPassword: zod.string().min(1, 'reset.validation.required'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'reset.validation.mismatch',
    path: ['confirmPassword'],
  });

export type ResetFormSchema = zod.infer<typeof resetSchema>;
