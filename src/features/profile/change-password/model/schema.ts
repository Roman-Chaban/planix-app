import * as zod from 'zod';

const changePasswordFieldsObject = zod.object({
  oldPassword: zod.string().min(1, 'system.validation.required'),
  newPassword: zod
    .string()
    .min(1, 'system.validation.required')
    .min(8, 'system.validation.minPassword'),
  confirmPassword: zod.string().min(1, 'system.validation.required'),
});

export type ChangePasswordSchema = zod.infer<typeof changePasswordFieldsObject>;

export const changePasswordSchema = changePasswordFieldsObject.refine(
  (data) => data.newPassword === data.confirmPassword,
  {
    message: 'system.validation.mismatch',
    path: ['confirmPassword'],
  },
);
