'use client';
import { SECTION_IDS } from '@/constants';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { IoLocationSharp } from 'react-icons/io5';
import { BackgroundGradient } from './ui/background-gradient';
import BlurFade from './ui/blur-fade';
import { FlipWords } from './ui/flip-words';

const Hero = () => {
  const t = useTranslations('HomePage');

  const handleScrollToRegistration = () => {
    const section = document.getElementById(SECTION_IDS.REGISTER);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className='container relative grid w-11/12 grid-cols-1 items-center border-2 border-transparent px-20 sm:gap-y-10 sm:py-10 lg:grid-cols-2'
      id={SECTION_IDS.HOME}
    >
      <div className='order-2 text-center sm:order-1 lg:text-left'>
        <h1 className='hidden text-center font-montserrat text-3xl font-extrabold leading-[1.2] sm:block lg:text-left'>
          <BlurFade delay={0}>IT CONSULTANT</BlurFade>{' '}
          <FlipWords
            duration={3}
            className='!text-primary'
            words={['CHALLENGE']}
          />
        </h1>
        <BlurFade delay={0.3}>
          <p className='m-auto hidden max-w-[60%] py-5 text-center text-muted-foreground sm:block lg:m-0 lg:text-left'>
            {t('hero.subTitle')}
          </p>
        </BlurFade>
        <BlurFade delay={0.5}>
          <div className='mt-4 flex items-center justify-center gap-x-1 max-sm:mx-16 lg:justify-start'>
            <IoLocationSharp className='max-sm:h-10 max-sm:w-10 max-sm:text-primary' />
            <p className='text-left font-bold uppercase text-muted-foreground max-sm:ps-2 max-sm:text-sm max-sm:text-primary'>
              {t('hero.time')}
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={0.7}>
          <button
            className='mt-6 w-auto rounded-md !bg-[#7FFFF7] px-6 py-2 font-semibold text-black hover:opacity-90'
            onClick={handleScrollToRegistration}
          >
            {t('hero.buttonTitle')}
          </button>
        </BlurFade>
      </div>

      <div className='order-1 flex items-center justify-center sm:order-2 lg:mt-0'>
        <BlurFade delay={1} duration={0.5} className='max-sm:hidden'>
          <BackgroundGradient
            className='h-full w-full'
            containerClassName='w-[300px] h-[421px] sm:h-[570px] sm:w-[406px]'
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
        </BlurFade>

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
  );
};

export default Hero;
