'use client';
import Image from 'next/image';
import React from 'react';
import GradualSpacing from './ui/gradual-spacing';
import { SECTION_IDS } from '@/constants';

const Rules = () => {
  return (
    <div
      className='container mt-44 rounded-lg border-2 border-[#868686] bg-[#ccc]/10 px-20 py-10 shadow-2xl backdrop-blur-sm'
      id={SECTION_IDS.RULES}
    >
      <div className='grid grid-cols-4'>
        <GradualSpacing
          text='Rules'
          className='col-span-1 text-[50px] font-extrabold uppercase !text-primary'
        />
        <div className='col-span-3'>
          <p className='text-xl'>
            &quot;Teams select a case study from the challenge provided by the
            organizers, then analyze and design ideas and solutions to address
            the identified issues. Awards will be given to ideas that are
            feasible, creative, and exemplify strong teamwork.&quot;
          </p>
        </div>
      </div>
      <div className='pointer-events-none relative mt-20 h-[400px] w-full select-none'>
        <Image
          className='h-full w-full object-contain'
          src={'/rules.webp'}
          fill
          alt=''
        />
      </div>
    </div>
  );
};

export default Rules;
