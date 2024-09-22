'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Countdown from 'react-countdown';

const TimeCounter = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const date = useMemo(() => {
    return Date.now() + (new Date('2024-10-19').getTime() - Date.now());
  }, []);

  return (
    isClient && (
      <div className='container my-40' suppressHydrationWarning>
        <Countdown
          date={date}
          renderer={(time) => (
            <div className='mx-auto flex h-60 w-full flex-col items-center justify-center gap-y-6 rounded-3xl border border-white bg-white/10 sm:w-3/4 lg:h-64'>
              <h2 className='text-center text-2xl font-extrabold text-primary'>
                TIME LEFT
              </h2>
              <div className='flex w-full flex-wrap items-center justify-around rounded-3xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] md:justify-center md:gap-x-20'>
                <div>
                  <p className='neon-text text-center text-3xl font-extrabold drop-shadow-2xl'>
                    {time.days >= 10 ? time.days : `0${time.days}`}
                  </p>
                  <p className='text-center text-base font-semibold uppercase text-white sm:text-lg'>
                    Days
                  </p>
                </div>
                <div>
                  <p className='neon-text text-center text-3xl font-extrabold drop-shadow-2xl'>
                    {time.hours >= 10 ? time.hours : `0${time.hours}`}
                  </p>
                  <p className='text-center text-base font-semibold uppercase text-white sm:text-lg'>
                    hours
                  </p>
                </div>
                <div>
                  <p className='neon-text text-center text-3xl font-extrabold drop-shadow-2xl'>
                    {time.minutes >= 10 ? time.minutes : `0${time.minutes}`}
                  </p>
                  <p className='text-center text-base font-semibold uppercase text-white sm:text-lg'>
                    min
                  </p>
                </div>
                <div>
                  <p className='neon-text text-center text-3xl font-extrabold drop-shadow-2xl'>
                    {time.seconds >= 10 ? time.seconds : `0${time.seconds}`}
                  </p>
                  <p className='text-center text-base font-semibold uppercase text-white sm:text-lg'>
                    sec
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
