'use client';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import React, { useEffect, useMemo, useState } from 'react';
import Countdown from 'react-countdown';

interface TimeCounterProps {
  locale?: string;
}

const TimeCounter = ({ locale = 'en' }: TimeCounterProps) => {
  const t = useTranslations('HomePage');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const date = useMemo(() => {
    return Date.now() + (new Date('2024-19-13').getTime() - Date.now());
  }, []);

  return (
    isClient && (
      <div
        className='container my-16 sm:my-24 md:my-40'
        suppressHydrationWarning
      >
        <Countdown
          date={date}
          renderer={(time) => (
            <div
              className={cn(
                { 'max-sm:py-28': locale === 'vi' },
                'card-gradient-border mx-auto flex h-44 w-full flex-col items-center justify-center gap-y-6 rounded-3xl sm:h-60 sm:w-3/4 lg:h-64',
              )}
            >
              <h2 className='text-center text-2xl font-extrabold uppercase text-primary'>
                {t('timeCounter.title')}
              </h2>
              <div className='flex w-full flex-wrap items-center justify-around rounded-3xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
                <div>
                  <p className='neon-text text-center text-3xl font-extrabold drop-shadow-2xl'>
                    {time.days >= 10 ? time.days : `0${time.days}`}
                  </p>
                  <p className='text-center text-base font-semibold uppercase text-white sm:text-lg'>
                    {t('timeCounter.days')}
                  </p>
                </div>
                <div>
                  <p className='neon-text text-center text-3xl font-extrabold drop-shadow-2xl'>
                    {time.hours >= 10 ? time.hours : `0${time.hours}`}
                  </p>
                  <p className='text-center text-base font-semibold uppercase text-white sm:text-lg'>
                    {t('timeCounter.hours')}
                  </p>
                </div>
                <div>
                  <p className='neon-text text-center text-3xl font-extrabold drop-shadow-2xl'>
                    {time.minutes >= 10 ? time.minutes : `0${time.minutes}`}
                  </p>
                  <p className='text-center text-base font-semibold uppercase text-white sm:text-lg'>
                    {t('timeCounter.minutes')}
                  </p>
                </div>
                <div>
                  <p className='neon-text text-center text-3xl font-extrabold drop-shadow-2xl'>
                    {time.seconds >= 10 ? time.seconds : `0${time.seconds}`}
                  </p>
                  <p className='text-center text-base font-semibold uppercase text-white sm:text-lg'>
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
