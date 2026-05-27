import dayjs from 'dayjs';

export const formatDate = (value?: string) => {
  if (!value) return '';

  const date = dayjs(value);

  return date.isValid() ? date.format('MMM DD, YYYY') : '';
};
