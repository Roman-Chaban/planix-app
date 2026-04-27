import { ReactNode } from "react";

import { DM_Sans } from "next/font/google";
import { notFound } from "next/navigation";

import "@shared/styles/reset/_reset.scss";

import { LOCALES, Locale } from "@/shared/config/i18n/locales";
import TranslationProvider from "@/shared/providers/TranslationProvider";

const dm_sans = DM_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
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

  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html lang={locale as Locale}>
      <body className={dm_sans.className}>
        <TranslationProvider locale={locale as Locale}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
