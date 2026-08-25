import type { WithChildren } from '@types';

import { DM_Sans } from 'next/font/google';

import '@shared/styles/base/index.scss';

const dm_sans = DM_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: true,
});

export default function RootLayout({ children }: WithChildren) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}
