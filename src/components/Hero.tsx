'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { IoLocationSharp } from 'react-icons/io5';
import { SECTION_IDS } from '@/constants';
import { BackgroundGradient } from './ui/background-gradient';
import BlurFade from './ui/blur-fade';
import { FlipWords } from './ui/flip-words';

const Hero = () => {
  const t = useTranslations('HomePage');

  const toRegister = () => {
    const section = document.getElementById(SECTION_IDS.REGISTER);
    section?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div
      className='container relative grid grid-cols-2 items-center py-10'
      id={SECTION_IDS.HOME}
    >
      <div>
        <h1 className='text-shadow-pop-left text-7xl font-extrabold leading-[1.2]'>
          IT CONSULTANT
          <br />
          <span className='!text-primary'>CHALLENGE</span>
        </h1>
        {/* <BlurFade delay={0.3}>
          <p className='max-w-[60%] py-5 text-muted-foreground'>
            {t('hero.subTitle')}
          </p>
        </BlurFade> */}
        <div className='mt-4 flex items-center gap-x-1'>
          <IoLocationSharp />
          <p className='text-lg font-bold uppercase text-white'>
            {t('hero.time')}
          </p>
        </div>
        <BlurFade delay={0.7}>
          <button
            onClick={toRegister}
            className='mt-10 w-auto rounded-md !bg-[#7FFFF7] px-6 py-2 font-semibold text-black hover:opacity-90'
          >
            {t('hero.buttonTitle')}
          </button>
        </BlurFade>
      </div>

      <div className='flex items-center justify-center'>
        <>
          <BackgroundGradient className='h-auto w-auto'>
            <div className='fade-in-right relative h-[570px] w-[406px] overflow-hidden rounded-3xl'>
              <Image
                src='/poster.webp'
                alt='landing-it-consulting'
                sizes='auto'
                className='object-cover'
                priority
                fill
              />
            </div>
          </BackgroundGradient>
        </>
      </div>
    </div>
  );
};

export default Hero;
