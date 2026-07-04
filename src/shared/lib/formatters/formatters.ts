export const formatCurrency = (
  value: number,
  currency = 'USD',
  locale = 'en-US',
): string => {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(value);
  } catch {
    return new Intl.NumberFormat(locale).format(value);
  }
};

export const formatDate = (
  dateInput: string | Date,
  locale = 'en-US',
): string => {
  try {
    const date =
      typeof dateInput === 'string' ? new Date(dateInput) : dateInput;

    return new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  } catch {
    return String(dateInput);
  }
};
