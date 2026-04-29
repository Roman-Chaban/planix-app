import { redirect } from 'next/navigation';

import { LOCALES } from '@/shared/constants/common';

const { EN } = LOCALES;

export default function Page() {
  redirect(`/${EN}`);
}
