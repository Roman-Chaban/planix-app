import { redirect } from 'next/navigation';

import { ROUTES } from '@/shared/constants/common';
import { DEFAULT_LOCALE } from '@/shared/constants/locales';

const { DASHBOARD } = ROUTES;

const DASHBOARD_ROUTE = `/${DEFAULT_LOCALE}/${DASHBOARD}`;

export default function HomePage() {
  redirect(DASHBOARD_ROUTE);
}
