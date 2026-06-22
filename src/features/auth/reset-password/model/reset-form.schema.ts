import * as zod from 'zod';

export const resetSchema = zod
  .object({
    newPassword: zod
      .string()
      .min(1, 'validation.required')
      .min(8, 'validation.minPassword'),
    confirmPassword: zod.string().min(1, 'validation.required'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'validation.mismatch',
    path: ['confirmPassword'],
  });

export type ResetFormSchema = zod.infer<typeof resetSchema>;
