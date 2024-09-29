import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import 'react-toastify/dist/ReactToastify.css';
import '../../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'IT Consulting',
  description: '',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} className='dark !scroll-smooth'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
        <link rel='apple-touch-icon' href='/favicon.png' />
        <link rel='mask-icon' href='/favicon.png' color='#000000' />
        <meta name='theme-color' content='#000000' />
        <meta name='author' content='Code MeLy | Netcompany' />
        <meta
          property='og:image'
          content='/cover.png'
          data-react-helmet='true'
        />
        <meta
          property='og:title'
          content='IT Consultant Challenge | Innovate, Modernize and Digitize effectively'
        />

        <meta
          property='og:description'
          content='IT Consultant Challenge—an exciting full-day event where IT students have the chance to showcase their skills, creativity, and problem-solving abilities. This event, hosted by Netcompany and Code MeLy, is your opportunity to step into the shoes of an IT consultant and tackle real-life challenges through digital transformation. Work alongside like-minded peers, gain valuable experience, and make a lasting impact.'
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
