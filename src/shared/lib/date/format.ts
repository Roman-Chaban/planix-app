import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { DATE_FORMAT } from '../common';

dayjs.extend(customParseFormat);

export const applyDateMask = (value: string): string => {
  const raw = value.replace(/\D/g, '').slice(0, 8);
  if (raw.length > 4)
    return `${raw.slice(0, 2)}.${raw.slice(2, 4)}.${raw.slice(4)}`;
  if (raw.length > 2) return `${raw.slice(0, 2)}.${raw.slice(2)}`;
  return raw;
};

export const toISO = (date: string) => {
  const parsed = dayjs(date, DATE_FORMAT.INPUT, true);
  return parsed.isValid() ? parsed.format(DATE_FORMAT.ISO) : date;
};

export const toInputFormat = (isoDate?: string | null) => {
  if (!isoDate) return '';
  const parsed = dayjs(isoDate, DATE_FORMAT.ISO, true);
  return parsed.isValid() ? parsed.format(DATE_FORMAT.INPUT) : isoDate;
};

export const toDisplay = (date?: string | null) => {
  if (!date) return '';
  const parsed = dayjs(date);
  return parsed.isValid() ? parsed.format(DATE_FORMAT.DISPLAY) : date;
};
