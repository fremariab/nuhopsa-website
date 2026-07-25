import type { Metadata } from 'next';
import { Lexend, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-lexend',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'NUHOPSA — National Union of Holy Child Past Students Association',
    template: '%s | NUHOPSA',
  },
  description:
    'Connecting Holy Child alumni across the globe. Join us for the 80th Anniversary celebrations, donate, volunteer, and stay connected.',
  keywords: [
    'NUHOPSA',
    'Holy Child',
    'alumni',
    'past students',
    '80th anniversary',
  ],
  openGraph: {
    title: 'NUHOPSA',
    description: 'Connecting Holy Child alumni across the globe.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${lexend.variable} ${cormorant.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

{
  /* <Script src="https://js.paystack.co/v1/inline.js" strategy="beforeInteractive" /> */
}
