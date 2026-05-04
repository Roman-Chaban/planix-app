import type { ReactNode } from 'react';

import { LOCALES, type Locale } from '@/shared/config/i18n/lib/locales';
import { GlobalProviders } from '@/shared/providers/GlobalProviders';

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

  return <GlobalProviders locale={locale as Locale}>{children}</GlobalProviders>;
}
