import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { DATE_FORMAT } from './constants';

dayjs.extend(customParseFormat);

export const toDisplayDate = (value: string): string => {
  if (!value || value.length < 10) return value;

  return dayjs(value, DATE_FORMAT.ISO, true).isValid()
    ? dayjs(value).format(DATE_FORMAT.DISPLAY)
    : value;
};

export const applyDateMask = (value: string): string => {
  const raw = value.replace(/\D/g, '').slice(0, 8);

  if (raw.length > 4) return `${raw.slice(0, 2)}.${raw.slice(2, 4)}.${raw.slice(4)}`;
  if (raw.length > 2) return `${raw.slice(0, 2)}.${raw.slice(2)}`;

  return raw;
};

export const toIsoDateOrPreserve = (formatted: string): string => {
  if (formatted.length !== 10) return formatted;

  const parsed = dayjs(formatted, DATE_FORMAT.DISPLAY, true);

  return parsed.isValid() ? parsed.format(DATE_FORMAT.ISO) : formatted;
};
