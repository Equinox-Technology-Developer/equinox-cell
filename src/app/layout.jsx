import { Work_Sans } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';

const workSans = Work_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-worksans',
});

export const metadata = {
  title: 'Equinoxcell',
  description: 'All About Equinoxcell Technology Indonesia will place here',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <main>{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
