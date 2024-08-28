'use client';
import Image from 'next/image';
import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';
import { FlipWords } from './ui/flip-words';
import BlurFade from './ui/blur-fade';
import { useTranslations } from 'next-intl';
import { LocaleProps } from '@/@types';

const Hero = () => {
  const t = useTranslations('HomePage');

  return (
    <div className='container relative grid grid-cols-2 items-center py-10'>
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
            {t('hero.subTitle')}
          </p>
        </BlurFade>
        <BlurFade delay={0.5}>
          <p className='mt-4 text-lg font-bold uppercase text-muted-foreground'>
            {t('hero.time')}
          </p>
        </BlurFade>
        <BlurFade delay={0.7}>
          <button className='mt-10 w-auto rounded-md !bg-[#7FFFF7] px-6 py-2 font-semibold text-black hover:opacity-90'>
            {t('hero.buttonTitle')}
          </button>
        </BlurFade>
      </div>

      <div className='flex items-center justify-center'>
        <BlurFade delay={1} duration={0.5}>
          <BackgroundGradient className='h-auto w-auto'>
            <div className='relative h-[570px] w-[406px] overflow-hidden rounded-3xl'>
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
