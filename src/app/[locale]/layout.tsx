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
        <meta
          property='og:image'
          content='/about-image.png'
          data-react-helmet='true'
        ></meta>
        <meta
          property='og:description'
          content='IT Consultant Challenge—một sự kiện kéo dài cả ngày thú vị, nơi sinh viên CNTT có cơ hội thể hiện kỹ năng, sự sáng tạo và khả năng giải quyết vấn đề của mình. Sự kiện này do Netcompany và Code Mely tổ chức, là cơ hội để bạn bước vào vai trò của một chuyên gia tư vấn CNTT và giải quyết những thách thức thực tế thông qua quá trình chuyển đổi số. Làm việc cùng những người đồng cấp có cùng chí hướng, tích lũy kinh nghiệm quý báu và tạo ra tác động lâu dài.'
        ></meta>
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
