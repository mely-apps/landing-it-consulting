'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { IoLocationSharp } from 'react-icons/io5';

import { SECTION_IDS } from '@/constants';

import { BackgroundGradient } from './ui/background-gradient';

const Hero = () => {
  const t = useTranslations('HomePage');

  const handleScrollToRegistration = () => {
    const section = document.getElementById(SECTION_IDS.REGISTER);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div
        className={`
          relative grid grid-cols-1 items-center px-0

          lg:grid-cols-2

          max-[1024px]:bg-none

          md:container md:mx-auto md:mt-20 md:w-11/12

          sm:m-0 sm:w-full sm:gap-y-10 sm:px-8 sm:py-10
        `}
        id={SECTION_IDS.HOME}
      >
        <div className={`
          order-2 text-center

          lg:ml-[50px] lg:text-left

          sm:order-1
        `}>
          <h1 className={`
            hidden text-center font-montserrat text-3xl font-extrabold
            leading-[1.2]

            lg:text-left

            md:mt-0

            sm:block
          `}>
            IT CONSULTANT
            <br />
            <span className='!text-primary'>CHALLENGE</span>
          </h1>
          <p className={`
            m-auto hidden max-w-[60%] py-5 text-center text-muted-foreground

            lg:m-0 lg:text-left

            sm:block
          `}>
            {t('hero.subTitle')}
          </p>

          <div className={`
            mt-4 flex items-center justify-center gap-x-1

            lg:justify-start

            max-sm:mx-16
          `}>
            <IoLocationSharp className={`max-sm:size-10 max-sm:text-primary`} />
            <p className={`
              text-left font-bold uppercase text-muted-foreground

              max-sm:ps-2 max-sm:text-sm max-sm:text-primary
            `}>
              {t('hero.time')}
            </p>
          </div>

          <button
            className={`
              mt-6 w-auto rounded-md !bg-[#7FFFF7] px-6 py-2 font-semibold
              text-black
              shadow-[0_0_2px_#7FFFF7,inset_0_0_2px_#7FFFF7,0_0_5px_#7FFFF7,0_0_15px_#7FFFF7,0_0_30px_#7FFFF7]

              hover:opacity-90
            `}
            onClick={handleScrollToRegistration}
          >
            {t('hero.buttonTitle')}
          </button>
        </div>

        <div className={`
          order-1 flex h-full items-center justify-center

          lg:mt-0

          sm:order-2
        `}>
          <BackgroundGradient
            className={`
              size-full

              max-sm:hidden
            `}
            containerClassName='w-[300px] h-[421px] sm:h-[570px] sm:w-[406px] max-sm:hidden'
          >
            <div className='relative size-full overflow-hidden rounded-3xl'>
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

          <div className={`
            relative h-[600px] w-full overflow-hidden p-0

            sm:hidden
          `}>
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
    </>
  );
};

export default Hero;
