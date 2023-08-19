import { Kaisei_Tokumin } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kihara Wedding',
  description: '木原家の結婚式Web招待状',
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  robots: { index: false, follow: false },
};

const baseFont = Kaisei_Tokumin({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={baseFont.className}>{children}</body>
    </html>
  );
}
