import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { siteContent } from '@/lib/siteContent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
