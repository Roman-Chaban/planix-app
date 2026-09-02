import dayjs, { type Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { DATE_FORMAT } from '../common';

dayjs.extend(customParseFormat);

export const applyDateMask = (value: string): string => {
  const raw = value.replace(/\D/g, '').slice(0, 8);

  if (raw.length <= 2) return raw;

  if (raw.length <= 4) return `${raw.slice(0, 2)}.${raw.slice(2)}`;

  return `${raw.slice(0, 2)}.${raw.slice(2, 4)}.${raw.slice(4)}`;
};

export const parseInputDate = (value: string): Dayjs | null => {
  const parsed = dayjs(value, DATE_FORMAT.INPUT, true);

  return parsed.isValid() ? parsed : null;
};

export const toISO = (date: string) => {
  const parsed = parseInputDate(date);

  return parsed ? parsed.format(DATE_FORMAT.ISO) : '';
};

export const toInputFormat = (isoDate?: string | null): string => {
  if (!isoDate) return '';

  const parsed = dayjs(isoDate, DATE_FORMAT.ISO, true);

  return parsed.isValid() ? parsed.format(DATE_FORMAT.INPUT) : '';
};

export const toDisplay = (isoDate?: string | null): string => {
  if (!isoDate) {
    return '';
  }

  const parsed = dayjs(isoDate);

  return parsed.isValid() ? parsed.format(DATE_FORMAT.DISPLAY) : '';
};
