'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface CountdownTimerProps {
  closeDate: string | Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ closeDate }: CountdownTimerProps) => {
  const t = useTranslations('root');
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(closeDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        setIsExpired(false);
      } else {
        setIsExpired(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [closeDate]);

  if (isExpired) {
    return (
      <div className='mt-6 text-center lg:text-left'>
        <p className='text-xl font-bold text-red-500'>
          {t('countdown.closed')}
        </p>
      </div>
    );
  }

  return (
    <div className='mt-6 flex justify-center gap-4 lg:justify-start'>
      <div className='flex flex-col items-center'>
        <div className='flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#80FFF7] to-[#FFB84E] shadow-lg'>
          <span className='text-2xl font-bold text-gray-900'>
            {timeLeft.days.toString().padStart(2, '0')}
          </span>
        </div>
        <span className='mt-2 text-xs font-medium text-gray-300'>
          {t('countdown.days')}
        </span>
      </div>

      <div className='flex flex-col items-center'>
        <div className='flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#80FFF7] to-[#FFB84E] shadow-lg'>
          <span className='text-2xl font-bold text-gray-900'>
            {timeLeft.hours.toString().padStart(2, '0')}
          </span>
        </div>
        <span className='mt-2 text-xs font-medium text-gray-300'>
          {t('countdown.hours')}
        </span>
      </div>

      <div className='flex flex-col items-center'>
        <div className='flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#80FFF7] to-[#FFB84E] shadow-lg'>
          <span className='text-2xl font-bold text-gray-900'>
            {timeLeft.minutes.toString().padStart(2, '0')}
          </span>
        </div>
        <span className='mt-2 text-xs font-medium text-gray-300'>
          {t('countdown.minutes')}
        </span>
      </div>

      <div className='flex flex-col items-center'>
        <div className='flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#80FFF7] to-[#FFB84E] shadow-lg'>
          <span className='text-2xl font-bold text-gray-900'>
            {timeLeft.seconds.toString().padStart(2, '0')}
          </span>
        </div>
        <span className='mt-2 text-xs font-medium text-gray-300'>
          {t('countdown.seconds')}
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
