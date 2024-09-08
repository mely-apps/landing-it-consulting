'use client';
import { LocaleProps } from '@/@types';
import { SECTION_IDS } from '@/constants';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';

const SECTION_ITEMS = [
  {
    title: 'Home',
    path: SECTION_IDS.HOME,
  },
  {
    title: 'About',
    path: SECTION_IDS.ABOUT,
  },
  {
    title: 'Rules',
    path: SECTION_IDS.RULES,
  },
  {
    title: 'Prizes',
    path: SECTION_IDS.PRIZES,
  },
  {
    title: 'Register',
    path: SECTION_IDS.REGISTER,
  },
  {
    title: 'Organizers',
    path: SECTION_IDS.ORGANIZERS,
  },
];

const Header = ({ locale }: LocaleProps) => {
  const router = useRouter();

  const handleToggleLocale = () => {
    locale === 'vi' ? router.push('/en') : router.push('/vi');
  };

  const handleSrollToSection = (path: string) => {
    const section = document.getElementById(path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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

          <div
            className='flex min-w-12 cursor-pointer items-center gap-x-2 uppercase hover:text-primary'
            onClick={handleToggleLocale}
          >
            <FaGlobeAmericas />
            <span>{locale}</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
