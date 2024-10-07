'use client';
import { EVENT_START_DATE, REGISTRATION_CLOSE_DATE } from '@/constants';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

interface TimeCounterProps {
  locale?: string;
}

const TimeCounter = ({ locale = 'en' }: TimeCounterProps) => {
  const t = useTranslations('root');
  const [isClient, setIsClient] = useState(false);
  const isClosedForm = Date.now() >= REGISTRATION_CLOSE_DATE.getTime();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div
        className='container my-16 px-4 sm:my-24 md:my-40'
        suppressHydrationWarning
      >
        <Countdown
          date={isClosedForm ? EVENT_START_DATE : REGISTRATION_CLOSE_DATE}
          renderer={(time) => (
            <div
              className={cn(
                { 'max-sm:py-28': locale === 'vi' },
                'card-gradient-border mx-auto flex h-44 w-full flex-col items-center justify-center gap-y-2 rounded-3xl sm:h-60 sm:w-3/4 md:gap-y-6 lg:h-64',
              )}
            >
              <h2 className='text-center text-2xl font-extrabold uppercase text-primary md:mb-5 md:text-5xl'>
                {isClosedForm
                  ? t('timeCounter.titleClosed')
                  : t('timeCounter.title')}
              </h2>
              <div className='flex w-full flex-wrap items-center justify-around rounded-3xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
                <div>
                  <p className='neon-text text-center text-2xl font-extrabold drop-shadow-2xl md:text-5xl'>
                    {time.days >= 10 ? time.days : `0${time.days}`}
                  </p>
                  <p className='text-center font-semibold uppercase text-white sm:text-lg'>
                    {t('timeCounter.days')}
                  </p>
                </div>
                <div>
                  <p className='neon-text text-center text-2xl font-extrabold drop-shadow-2xl md:text-5xl'>
                    {time.hours >= 10 ? time.hours : `0${time.hours}`}
                  </p>
                  <p className='text-center font-semibold uppercase text-white sm:text-lg'>
                    {t('timeCounter.hours')}
                  </p>
                </div>
                <div>
                  <p className='neon-text text-center text-2xl font-extrabold drop-shadow-2xl md:text-5xl'>
                    {time.minutes >= 10 ? time.minutes : `0${time.minutes}`}
                  </p>
                  <p className='text-center font-semibold uppercase text-white sm:text-lg'>
                    {t('timeCounter.minutes')}
                  </p>
                </div>
                <div>
                  <p className='neon-text text-center text-2xl font-extrabold drop-shadow-2xl md:text-5xl'>
                    {time.seconds >= 10 ? time.seconds : `0${time.seconds}`}
                  </p>
                  <p className='text-center font-semibold uppercase text-white sm:text-lg'>
                    {t('timeCounter.seconds')}
                  </p>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    )
  );
};

export default TimeCounter;
