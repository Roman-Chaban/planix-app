import dayjs from 'dayjs';

import { DATE_FORMAT } from './constants';

export const validateDateOrder = (
  targetDate: string,
  compareDate: string | undefined,
  type: 'start' | 'due',
  errorMessages: { invalid: string; outOfOrder: string },
) => {
  if (!targetDate) return true;

  const target = dayjs(targetDate, [DATE_FORMAT.ISO, DATE_FORMAT.DISPLAY]);
  if (!target.isValid()) return errorMessages.invalid;

  if (compareDate) {
    const compare = dayjs(compareDate, [DATE_FORMAT.ISO, DATE_FORMAT.DISPLAY]);
    const isOutOfOrder =
      type === 'start' ? target.isAfter(compare) : target.isBefore(compare);

    if (isOutOfOrder) return errorMessages.outOfOrder;
  }

  return true;
};
