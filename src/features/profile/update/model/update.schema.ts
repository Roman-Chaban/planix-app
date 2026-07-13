import { z } from 'zod';

export const updateSchema = z.object({
  firstName: z.string().trim().min(1, { error: 'editForm.validation.firstName.required' }),
  lastName: z.string().trim().min(1, { error: 'editForm.validation.lastName.required' }),
  contact: z.string().trim().min(1, { error: 'editForm.validation.contact.required' }),

  email: z
    .string()
    .trim()
    .pipe(
      z.email({
        error: 'editForm.validation.email.invalid',
      }),
    ),

  birthDate: z.string().min(1, { error: 'editForm.validation.birthDate.required' }),
});

export type UpdateFormValues = z.infer<typeof updateSchema>;
