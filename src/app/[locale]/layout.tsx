import type { ReactNode } from 'react';

import { notFound } from 'next/navigation';

import { LOCALES } from '@/shared/i18n/locales/locales';
import { isLocale } from '@/shared/lib/routing/isLocale';
import { AppProviders } from '@/shared/providers/index';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <AppProviders locale={locale}>{children}</AppProviders>;
}
