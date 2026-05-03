import { redirect } from 'next/navigation';

import { ROUTES } from '@/shared/constants/common';

const { DASHBOARD } = ROUTES;

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(`/${locale}/${DASHBOARD}`);
}
