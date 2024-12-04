import Footer from '@/components/Footer';
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import FloatingPhoneButton from '@/components/FloatingPhoneButton';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap', // Ajoutez cette ligne
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap', // Ajoutez cette ligne
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'MS Carrelage 24',
  description: 'MS Carrelage 24',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.variable} ${openSans.variable} font-montserrat antialiased bg-slate-100`}
      >
        <Navbar />
        {children}
        <FloatingPhoneButton />
        <Footer />
      </body>
    </html>
  );
}
