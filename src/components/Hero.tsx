'use client';
import Image from 'next/image';
import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';

const Hero = () => {
  return (
    <div className='container grid grid-cols-2 items-center py-20'>
      <div>
        <h1 className='text-7xl font-extrabold leading-[1.2]'>
          IT CONSULTANT <span className='text-primary'>CHALLENGE</span>
        </h1>
        <p className='max-w-[60%] py-5 text-muted-foreground'>
          Hackathon cuoc thi danh cho cacd coder mới đẻ, khi tham gia cuộc thi
          các bạn sẻ được tham gia code cùng với chúng tôi
        </p>
        <p className='mt-4 text-lg font-bold uppercase text-muted-foreground'>
          SATURDAY, 12TH OCTORBER, NETCOMPANY OFFICE
        </p>
        <button className='mt-10 w-auto rounded-md bg-[#7FFFF7] px-6 py-2 font-semibold text-black'>
          Register Now
        </button>
      </div>
      <div className='flex items-center justify-center'>
        <BackgroundGradient className='!overflow-hidden'>
          <div className='relative h-[546px] w-[406px] overflow-hidden rounded-3xl'>
            <Image
              src='/Untitled.png'
              alt='landing-it-consulting'
              sizes='auto'
              className='object-cover'
              priority
              fill
            />
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Hero;
