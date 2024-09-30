import CodeSandBox from './icons/CodeSandBox';
import MailContact from './icons/MailContact';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Copyright, Facebook, Globe } from 'lucide-react';

const Footer = () => {
  const t = useTranslations('HomePage');

  return (
    <div className='mt-40 bg-[#023C38] py-10'>
      <div className='container grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4'>
        <div className='text-lg font-extrabold max-md:col-span-2'>
          <p>IT CONSULTANT</p>
          <p className='text-primary'>CHALLENGE</p>
        </div>
        {/* <div>
          <p className='inline-block border-b-2 border-[#419D98] py-1 font-bold'>
            {t('header.organizers')}
          </p>
            <ul className='mt-2'>
              
              <Facebook />
              <Link
                href='https://www.facebook.com/code.mely'
                className='flex items-center gap-2 transition-all hover:text-primary'
                target='_blank'
              >
                Code MeLy
              </Link>
              <Facebook />
              <Link
                href='https://www.facebook.com/netcompanyvietnam'
                className='flex items-center gap-2 transition-all hover:text-primary'
                target='_blank'
              >
                Netcompany Vietnam
              </Link>
            </ul>
        </div> */}
        <div>
          <p className='inline-block border-b-2 border-[#419D98] py-1 font-bold'>
            {t('footer.contact')}
          </p>
          <ul className='mt-2 flex flex-col gap-2'>
            <li className='flex gap-x-2'>
              <Facebook />
              <Link
                href='https://www.facebook.com/code.mely'
                className='inline-block flex-1 break-all text-white transition-all hover:text-primary'
                target='_blank'
              >
                Code MeLy
              </Link>
            </li>
            <li className='flex gap-x-2'>
              <Facebook />
              <Link
                href='https://www.facebook.com/netcompanyvietnam'
                className='inline-block flex-1 break-all text-white transition-all hover:text-primary'
                target='_blank'
              >
                Netcompany Vietnam
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className='inline-block border-b-2 border-[#419D98] py-1 font-bold'>
            {t('footer.contact')}
          </p>
          <ul className='mt-2 flex flex-col gap-2'>
            <li className='flex gap-x-2'>
              <MailContact className='h-6 w-6 flex-1' />
              <Link
                href='mailto:contact@codemely.dev'
                className='inline-block flex-1 break-all text-white transition-all hover:text-primary'
              >
                contact@codemely.dev
              </Link>
            </li>
            <li className='flex gap-x-2'>
              <MailContact className='h-6 w-6 flex-1' />
              <Link
                href='mailto:recruitment.vn@netcompany.com'
                className='inline-block flex-1 break-all text-white transition-all hover:text-primary'
              >
                recruitment.vn@netcompany.com
              </Link>
            </li>
          </ul>
        </div>
        <div className='max-md:col-span-2 max-md:flex-col'>
          <p className='inline-block border-b-2 border-[#419D98] py-1 font-bold'>
            {t('footer.followUs')}
          </p>
          <div className='mt-2 flex flex-col gap-2'>
            <Link
              href='https://www.codemely.dev/'
              className='flex items-center gap-2 transition-all hover:text-primary'
              target='_blank'
            >
              <Globe />
              codemely.dev
            </Link>
            <Link
              href='https://netcompany.com/'
              className='flex items-center gap-2 transition-all hover:text-primary'
              target='_blank'
            >
              <Globe />
              netcompany.com
            </Link>
          </div>
        </div>
      </div>
      <div className='container mt-10 flex items-center gap-2'>
        <Copyright />
        <p className='text-muted-foreground'>
          2024 Copyright Code MeLy. All Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
