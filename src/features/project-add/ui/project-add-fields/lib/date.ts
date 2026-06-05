import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { DATE_FORMAT } from './constants';

dayjs.extend(customParseFormat);

export const applyDateMask = (value: string): string => {
  const raw = value.replace(/\D/g, '').slice(0, 8);
  if (raw.length > 4) return `${raw.slice(0, 2)}.${raw.slice(2, 4)}.${raw.slice(4)}`;
  if (raw.length > 2) return `${raw.slice(0, 2)}.${raw.slice(2)}`;
  return raw;
};

export const toDisplay = (date?: string | null) => {
  if (!date) return '';

  if (date.length < 10) return date;

  const parsed = dayjs(date);
  return parsed.isValid() ? parsed.format(DATE_FORMAT.DISPLAY) : date;
};

export const toISO = (date: string) => {
  const parsed = dayjs(date, DATE_FORMAT.INPUT, true);
  return parsed.isValid() ? parsed.format(DATE_FORMAT.ISO) : date;
};
