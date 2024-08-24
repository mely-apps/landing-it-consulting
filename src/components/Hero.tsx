'use client';
import Image from 'next/image';
import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';
import { FlipWords } from './ui/flip-words';
import BlurFade from './ui/blur-fade';

const Hero = () => {
  return (
    <div className='container grid grid-cols-2 items-center py-20'>
      <div>
        <h1 className='text-7xl font-extrabold leading-[1.2]'>
          <BlurFade delay={0}>IT CONSULTANT</BlurFade>{' '}
          <FlipWords
            duration={3}
            className='!text-primary'
            words={['CHALLENGE']}
          />
        </h1>
        <BlurFade delay={0.3}>
          <p className='max-w-[60%] py-5 text-muted-foreground'>
            Hackathon cuoc thi danh cho cacd coder mới đẻ, khi tham gia cuộc thi
            các bạn sẻ được tham gia code cùng với chúng tôi
          </p>
        </BlurFade>
        <BlurFade delay={0.5}>
          <p className='mt-4 text-lg font-bold uppercase text-muted-foreground'>
            SATURDAY, 12TH OCTORBER, NETCOMPANY OFFICE
          </p>
        </BlurFade>
        <BlurFade delay={0.7}>
          <button className='mt-10 w-auto rounded-md bg-[#7FFFF7] px-6 py-2 font-semibold text-black'>
            Register Now
          </button>
        </BlurFade>
      </div>
      <div className='flex items-center justify-center'>
        <BlurFade delay={1} duration={0.5}>
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
        </BlurFade>
      </div>
    </div>
  );
};

export default Hero;
