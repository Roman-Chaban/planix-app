import { redirect } from 'next/navigation';

import { ROUTES } from '@/shared/config/routes';
import { DEFAULT_LOCALE } from '@/shared/i18n';

const { DASHBOARD } = ROUTES;

const DASHBOARD_ROUTE = `/${DEFAULT_LOCALE}/${DASHBOARD}`;

export default function HomePage() {
  redirect(DASHBOARD_ROUTE);
}
