import { redirect } from 'next/navigation';

import { ROUTES } from '@/shared/config/common';
import { DEFAULT_LOCALE } from '@/shared/lib/i18n/locales';

const { DASHBOARD } = ROUTES;

const DASHBOARD_ROUTE = `/${DEFAULT_LOCALE}/${DASHBOARD}`;

export default function HomePage() {
  redirect(DASHBOARD_ROUTE);
}
