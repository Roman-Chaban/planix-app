import { redirect } from 'next/navigation';

import { DEFAULT_LOCALE } from '@/shared/config/i18n/lib/locales';
import { ROUTES } from '@/shared/constants/common';

const { DASHBOARD } = ROUTES;

const DASHBOARD_ROUTE = `/${DEFAULT_LOCALE}/${DASHBOARD}`;

export default function HomePage() {
  redirect(DASHBOARD_ROUTE);
}
