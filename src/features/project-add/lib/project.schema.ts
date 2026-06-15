import dayjs from 'dayjs';
import * as zod from 'zod';

import { DATE_FORMAT } from '@/features/project-add';

export const projectDetailsSchema = zod
  .object({
    projectName: zod
      .string()
      .min(5, 'validation.projectNameMin')
      .max(25, 'validation.projectNameMax'),

    clientName: zod
      .string()
      .min(5, 'validation.clientNameMin')
      .max(25, 'validation.clientNameMax'),

    status: zod.enum(['Pending', 'In Progress', 'Completed', 'Canceled']),

    startDate: zod
      .string()
      .min(1, 'validation.startDateRequired')
      .length(10, 'validation.startDateInvalid'),
    dueDate: zod
      .string()
      .min(1, 'validation.dueDateRequired')
      .length(10, 'validation.dueDateInvalid'),
    price: zod
      .string()
      .min(1, 'validation.priceRequired')
      .refine((price) => {
        const value = Number(price);
        return !Number.isNaN(value) && Number.isFinite(value) && value >= 0;
      }, 'validation.priceInvalid'),
    platform: zod.string().min(3, 'validation.platformMin'),
    description: zod
      .string()
      .min(1, 'validation.descriptionRequired')
      .max(500, 'validation.descriptionMax'),
    files: zod
      .array(
        zod.union([
          zod.instanceof(File),
          zod.object({ name: zod.string(), url: zod.string() }),
        ]),
      )
      .min(1, 'validation.filesRequired')
      .refine(
        (files) =>
          files.every((f) => {
            if (f instanceof File) {
              return f.size <= 5 * 1024 * 1024;
            }
            return true;
          }),
        'validation.fileSizeExceeded',
      ),
  })

  .superRefine((data, ctx) => {
    const start = dayjs(
      data.startDate,
      [DATE_FORMAT.INPUT, DATE_FORMAT.ISO],
      true,
    );
    const end = dayjs(data.dueDate, [DATE_FORMAT.INPUT, DATE_FORMAT.ISO], true);

    if (data.startDate.length === 10 && !start.isValid()) {
      ctx.addIssue({
        code: 'custom',
        message: 'validation.startDateInvalid',
        path: ['startDate'],
      });
    }

    if (data.dueDate.length === 10 && !end.isValid()) {
      ctx.addIssue({
        code: 'custom',
        message: 'validation.dueDateInvalid',
        path: ['dueDate'],
      });
    }

    if (start.isValid() && end.isValid() && start.isAfter(end)) {
      ctx.addIssue({
        code: 'custom',
        message: 'validation.dateRangeInvalid',
        path: ['startDate'],
      });
    }
  });

export type ProjectDetailsSchema = zod.infer<typeof projectDetailsSchema>;
