'use client';
import { LocaleProps } from '@/@types';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';

const SECTION_ITEMS = [
  {
    title: 'Home',
    path: '#',
  },
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Schedule',
    path: '#schedule',
  },
  {
    title: 'Register',
    path: '#register',
  },
  {
    title: 'Q&A',
    path: '#q&a',
  },
];

const Header = ({ locale }: LocaleProps) => {
  const router = useRouter();

  const handleToggleLocale = () => {
    locale === 'vi' ? router.push('/en') : router.push('/vi');
  };

  return (
    <div className='container relative flex items-center justify-between pt-8'>
      <div className='font-montserrat text-2xl font-extrabold'>
        <p className='text-white'>IT Consultant</p>
        <p className='text-primary'>Challenge</p>
      </div>

      <div className='flex items-center gap-x-8'>
        <nav className='flex h-full items-center gap-x-8 font-semibold text-gray'>
          {SECTION_ITEMS.map((item, idx) => (
            <p className='cursor-pointer hover:text-white' key={item.title}>
              {item.title}
            </p>
          ))}

          <div
            className='flex min-w-12 cursor-pointer items-center gap-x-2 uppercase hover:text-white'
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
