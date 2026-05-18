import { redirect } from 'next/navigation';

import { ROUTES } from '@/shared/config/common/common';
import { DEFAULT_LOCALE } from '@/shared/config/locales/locales';

const { DASHBOARD } = ROUTES;

const DASHBOARD_ROUTE = `/${DEFAULT_LOCALE}/${DASHBOARD}`;

export default function HomePage() {
  redirect(DASHBOARD_ROUTE);
}
