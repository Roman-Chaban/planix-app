import { redirect } from 'next/navigation';

import { LOCALES, ROUTES } from '@/shared/constants/common';

const { EN } = LOCALES;
const { DASHBOARD } = ROUTES;

const DASHBOARD_ROUTE = `/${EN}/${DASHBOARD}`;

export default function HomePage() {
  redirect(DASHBOARD_ROUTE);
}
