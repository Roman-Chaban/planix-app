import type { ReactNode } from 'react';

import { DM_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';

import '@shared/styles/reset/_reset.scss';

import { LOCALES, type Locale } from '@/shared/config/i18n/locales';
import { isLocale } from '@/shared/lib/helpers/isLocale/isLocale';
import { GlobalProviders } from '@/shared/providers/GlobalProviders';

const dm_sans = DM_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export function generateStaticParams(): { locale: Locale }[] {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale}>
      <body className={dm_sans.className}>
        <GlobalProviders locale={locale}>{children}</GlobalProviders>
      </body>
    </html>
  );
}
