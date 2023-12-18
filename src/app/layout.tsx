import Head from 'next/head';
import type { Metadata } from 'next';
import './globals.scss';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'JO KEN PÔ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;500;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body >{children}</body>
    </html>
  );
}
