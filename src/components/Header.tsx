'use client';
import { LocaleProps } from '@/@types';
import { SECTION_IDS } from '@/constants';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Switch } from './ui/switch';

const Header = ({ locale }: LocaleProps) => {
  const t = useTranslations('HomePage.header');
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const SECTION_ITEMS = [
    {
      title: t('home'),
      path: SECTION_IDS.HOME,
    },
    {
      title: t('about'),
      path: SECTION_IDS.ABOUT,
    },
    {
      title: t('rules'),
      path: SECTION_IDS.RULES,
    },
    {
      title: t('prizes'),
      path: SECTION_IDS.PRIZES,
    },
    {
      title: t('register'),
      path: SECTION_IDS.REGISTER,
    },
    {
      title: t('organizer'),
      path: SECTION_IDS.ORGANIZERS,
    },
  ];
  const handleToggleLocale = async () => {
    setLoading(true);

    locale === 'vi' ? router.push('/en') : router.push('/vi');
  };

  const handleSrollToSection = (path: string) => {
    const section = document.getElementById(path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {loading && (
        <div className='progress' style={{ height: '5px', width: '70%' }}></div>
      )}

      <div
        className='container relative flex items-center justify-between pt-8'
        id='header'
      >
        <div className='font-montserrat text-2xl font-extrabold'>
          <p className='text-white'>IT Consultant</p>
          <p className='text-primary'>Challenge</p>
        </div>

        <div className='flex items-center gap-x-8'>
          <nav className='flex h-full items-center gap-x-8 font-semibold text-gray'>
            {SECTION_ITEMS.map((item, idx) => (
              <p
                className='cursor-pointer hover:text-primary'
                key={item.title}
                onClick={() => {
                  handleSrollToSection(item.path);
                }}
              >
                {item.title}
              </p>
            ))}

            <div className='flex min-w-12 cursor-pointer items-center gap-x-2 uppercase hover:text-primary'>
              <Switch onClick={handleToggleLocale} checked={locale === 'vi'} />
              <span>{locale}</span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
