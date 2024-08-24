'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Countdown from 'react-countdown';

const TimeCounter = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const date = useMemo(() => {
    return Date.now() + (new Date('2024-12-30').getTime() - Date.now());
  }, []);

  return (
    isClient && (
      <div className='container my-40' suppressHydrationWarning>
        <h2 className='text-center text-[50px] font-extrabold text-primary'>
          TIME LEFT
        </h2>
        <Countdown
          date={date}
          renderer={(time) => (
            <div className='mt-16 flex h-64 w-full items-center justify-center gap-x-20 rounded-3xl border border-white bg-white/10 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
              <div>
                <p className='neon-text text-center text-6xl font-extrabold drop-shadow-2xl'>
                  {time.days > 10 ? time.days : `0${time.days}`}
                </p>
                <p className='text-center text-3xl font-semibold uppercase text-[#7C9190]'>
                  Days
                </p>
              </div>
              <div>
                <p className='neon-text text-center text-6xl font-extrabold drop-shadow-2xl'>
                  {time.hours > 10 ? time.hours : `0${time.hours}`}
                </p>
                <p className='text-center text-3xl font-semibold uppercase text-[#7C9190]'>
                  hours
                </p>
              </div>
              <div>
                <p className='neon-text text-center text-6xl font-extrabold drop-shadow-2xl'>
                  {time.minutes > 10 ? time.minutes : `0${time.minutes}`}
                </p>
                <p className='text-center text-3xl font-semibold uppercase text-[#7C9190]'>
                  min
                </p>
              </div>
              <div>
                <p className='neon-text text-center text-6xl font-extrabold drop-shadow-2xl'>
                  {time.seconds > 10 ? time.seconds : `0${time.seconds}`}
                </p>
                <p className='text-center text-3xl font-semibold uppercase text-[#7C9190]'>
                  sec
                </p>
              </div>
            </div>
          )}
        />
      </div>
    )
  );
};

export default TimeCounter;
