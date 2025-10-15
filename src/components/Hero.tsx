'use client';
import { SECTION_IDS } from '@/constants';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { IoLocationSharp } from 'react-icons/io5';
import BlurFade from './ui/blur-fade';
import AppCard from './ui/AppCard';
import { isMobile } from 'react-device-detect';
import { gotoRegistration } from '@/lib/utils';
import CountdownTimer from './CountdownTimer';
import { REGISTRATION_CLOSE_DATE } from '@/constants';

const Hero = () => {
  const t = useTranslations('root');

  return (
    <div className='container px-0 md:px-4'>
      <div
        className='hero-section grid grid-cols-1 items-center max-[1024px]:bg-none sm:m-0 sm:w-full sm:gap-y-10 sm:px-8 sm:py-10 md:relative md:mx-auto lg:grid-cols-2'
        id={SECTION_IDS.HOME}
      >
        <div className='order-2 text-center sm:order-1 lg:ml-[50px] lg:text-left'>
          <h1 className='hidden text-center font-montserrat text-6xl font-extrabold leading-[1.2] sm:block md:mt-0 lg:text-left'>
            IT CONSULTANT
            <br />
            <span className='!text-primary'>CHALLENGE</span>
          </h1>
          <p className='tracking-in-expand m-auto hidden max-w-[60%] pb-5 pt-3 text-center text-muted-foreground sm:block lg:m-0 lg:text-left'>
            {t('hero.subTitle')}
          </p>
          <BlurFade delay={0.5}>
            <div className='mt-4 flex items-center justify-center gap-x-1 max-sm:mx-16 lg:justify-start'>
              <IoLocationSharp className='max-sm:h-10 max-sm:w-10 max-sm:text-primary' />
              <p className='text-left font-bold uppercase text-muted-foreground max-sm:ps-2 max-sm:text-sm max-sm:text-primary'>
                {t('hero.time')}
              </p>
            </div>
          </BlurFade>

          {/* Countdown Timer */}
          <BlurFade delay={0.6}>
            <CountdownTimer closeDate={REGISTRATION_CLOSE_DATE} />
          </BlurFade>

          <BlurFade delay={0.7}>
            <button
              className='mt-8 w-auto rounded-md !bg-[#7FFFF7] px-6 py-2 font-semibold text-black shadow-[0_0_2px_#7FFFF7,inset_0_0_2px_#7FFFF7,0_0_5px_#7FFFF7,0_0_15px_#7FFFF7,0_0_30px_#7FFFF7] hover:opacity-90'
              onClick={gotoRegistration}
            >
              {t('hero.buttonTitle')}
            </button>
          </BlurFade>
        </div>

        <div className='order-1 flex h-full w-full items-center justify-center sm:order-2 lg:mt-[0px]'>
          <div className='fade-in-right max-sm:hidden sm:h-[500px] sm:w-[360px] lg:mt-[70px] lg:h-[calc(100%_-_8vw_-_66px)] lg:w-[26vw] xl:h-[580px] xl:w-[378px]'>
            <AppCard className='card bg-poster relative h-full w-full overflow-hidden rounded-3xl'>
              <div className='relative h-full w-full overflow-hidden rounded-3xl'>
                <Image
                  src='/cover.png'
                  alt='landing-it-consulting'
                  sizes='auto'
                  className='object-cover'
                  priority
                  fill
                />
              </div>
            </AppCard>
          </div>
          {/* <AnimatedCard>
            <BackgroundGradient
              className='h-full w-full max-sm:hidden'
              containerClassName='w-[300px] h-[421px] sm:h-[570px] sm:w-[406px] max-sm:hidden'
            >
              <div className='relative h-full w-full overflow-hidden rounded-3xl'>
                <Image
                  src='/cover.png'
                  alt='landing-it-consulting'
                  sizes='auto'
                  className='object-cover'
                  priority
                  fill
                />
              </div>
            </BackgroundGradient>
          </AnimatedCard> */}

          <div className='relative h-[600px] w-full overflow-hidden p-0 sm:hidden'>
            <Image
              src='/cover.png'
              alt='landing-it-consulting'
              sizes='auto'
              className='object-cover'
              priority
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
