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

  return (
    <div
      className='container relative grid grid-cols-1 items-center py-10 lg:grid-cols-2'
      id={SECTION_IDS.HOME}
    >
      <div className='text-center lg:text-left'>
        <h1 className='text-center text-4xl font-extrabold leading-[1.2] lg:text-left'>
          <BlurFade delay={0}>IT CONSULTANT</BlurFade>{' '}
          <FlipWords
            duration={3}
            className='!text-primary'
            words={['CHALLENGE']}
          />
        </h1>
        <BlurFade delay={0.3}>
          <p className='m-auto max-w-[60%] py-5 text-center text-muted-foreground lg:m-0 lg:text-left'>
            {t('hero.subTitle')}
          </p>
        </BlurFade>
        <BlurFade delay={0.5}>
          <div className='mt-4 flex items-center justify-center gap-x-1 lg:justify-start'>
            <IoLocationSharp />
            <p className='font-bold uppercase text-muted-foreground'>
              {t('hero.time')}
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={0.7}>
          <button className='mt-10 w-auto rounded-md !bg-[#7FFFF7] px-6 py-2 font-semibold text-black hover:opacity-90'>
            {t('hero.buttonTitle')}
          </button>
        </BlurFade>
      </div>

      <div className='mt-14 flex items-center justify-center lg:mt-0'>
        <BlurFade delay={1} duration={0.5}>
          <BackgroundGradient
            className='h-full w-full'
            containerClassName='w-[300px] h-[421px] sm:h-[570px] sm:w-[406px]'
          >
            <div className='relative h-full w-full overflow-hidden rounded-3xl'>
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
