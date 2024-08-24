'use client';
import React from 'react';
import BlurFade from './ui/blur-fade';
import { FadeText } from './ui/fade-text';

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

const Header = () => {
  return (
    <div className='container flex items-center justify-between pt-8'>
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
        </nav>

        <button className='rounded-xl bg-gray px-6 py-2 font-semibold text-[#081717]'>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Header;
