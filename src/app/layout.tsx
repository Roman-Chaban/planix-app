import type { ReactNode } from 'react';
import { DM_Sans } from 'next/font/google';

import '@shared/styles/reset/_reset.scss';

const dm_sans = DM_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
