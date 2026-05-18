import { redirect } from 'next/navigation';

import { ROUTES } from '@/shared/config/ui/common';
import { DEFAULT_LOCALE } from '@/shared/config/ui/locales';

const { DASHBOARD } = ROUTES;

const DASHBOARD_ROUTE = `/${DEFAULT_LOCALE}/${DASHBOARD}`;

export default function HomePage() {
  redirect(DASHBOARD_ROUTE);
}
