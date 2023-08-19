import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photos - Kihara Wedding',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
