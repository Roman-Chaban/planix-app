import type { ReactNode } from 'react';

import { notFound } from 'next/navigation';

import { GlobalProviders } from '@/app/providers/GlobalProviders';
import { LOCALES } from '@/shared/constants/locales';
import { isLocale } from '@/shared/lib/routing/is-locale';

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

  return <GlobalProviders locale={locale}>{children}</GlobalProviders>;
}
