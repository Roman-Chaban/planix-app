import dayjs from 'dayjs';
import * as zod from 'zod';

import { DATE_FORMAT } from '../ui/project-add-fields';

export const projectDetailsSchema = zod
  .object({
    projectName: zod
      .string()
      .min(5, 'Project name must be at least 5 characters long')
      .max(25, 'Project name must be at most 25 characters long'),

    clientName: zod
      .string()
      .min(5, 'Client name must be at least 5 characters long')
      .max(25, 'Client name must be at most 25 characters long'),

    startDate: zod.string(),
    dueDate: zod.string(),
    price: zod
      .string()
      .min(1, 'Price is required')
      .refine((price) => !isNaN(parseFloat(price)) && parseFloat(price) >= 0, 'Must be a number'),
    platform: zod.string().min(3, 'Platform must be at least 3 characters long'),
    description: zod.string().max(500, 'Description must be at most 500 characters long'),
    files: zod.array(zod.instanceof(File)),
  })
  .superRefine((data, ctx) => {
    const start = dayjs(data.startDate, [DATE_FORMAT.INPUT, DATE_FORMAT.ISO], true);
    const end = dayjs(data.dueDate, [DATE_FORMAT.INPUT, DATE_FORMAT.ISO], true);

    if (data.startDate.length === 10 && !start.isValid()) {
      ctx.addIssue({ code: 'custom', message: 'Invalid start date', path: ['startDate'] });
    }
    if (data.dueDate.length === 10 && !end.isValid()) {
      ctx.addIssue({ code: 'custom', message: 'Invalid due date', path: ['dueDate'] });
    }

    if (start.isValid() && end.isValid() && start.isAfter(end)) {
      ctx.addIssue({
        code: 'custom',
        message: 'Start date cannot be after due date',
        path: ['startDate'],
      });
    }
  });

export type ProjectDetailsSchema = zod.infer<typeof projectDetailsSchema>;
