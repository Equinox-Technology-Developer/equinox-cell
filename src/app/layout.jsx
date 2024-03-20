import { Work_Sans } from 'next/font/google';

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
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
