import * as z from 'zod';

export const resetSchema = z
  .object({
    newPassword: z
      .string()
      .min(1, 'reset.validation.required')
      .min(8, 'reset.validation.minPassword'),
    confirmPassword: z.string().min(1, 'reset.validation.required'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'reset.validation.mismatch',
    path: ['confirmPassword'],
  });

export type ResetFormSchema = z.infer<typeof resetSchema>;
