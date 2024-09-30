'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import { Top1, Top2, Top3 } from '@/assets/Prizes';
import { SECTION_IDS } from '@/constants';

interface PrizesProps {
  locale?: string;
}

const Prizes = ({ locale }: PrizesProps) => {
  const t = useTranslations('HomePage');
  const [svgHeight, setSvgHeight] = useState<number>();

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth < 640) {
        setSvgHeight(150);
        return;
      }

      if (innerWidth < 768) {
        setSvgHeight(350);
        return;
      }

      if (innerWidth < 1024) {
        setSvgHeight(450);
        return;
      }

      setSvgHeight(undefined);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='container pt-32' id={SECTION_IDS.PRIZES}>
      <motion.h2
        className='text-center text-2xl font-extrabold uppercase text-primary'
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            bounce: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        {t('prizes.title')}
      </motion.h2>
      <motion.div
        className='mt-10 grid grid-cols-3'
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            bounce: 0.5,
            delay: 0.4,
          },
        }}
        viewport={{ once: true }}
      >
        <motion.div className={`
          relative flex items-center justify-center transition-all

          hover:scale-105
        `}>
          <Top2 className={`
            w-4/5

            xl:w-2/3
          `} locale={locale} height={svgHeight} />
        </motion.div>

        <motion.div className={`
          relative flex -translate-y-12 items-center justify-center
          transition-all

          hover:scale-105

          sm:-translate-y-20
        `}>
          <Top1 className={`
            w-4/5

            xl:w-2/3
          `} locale={locale} height={svgHeight} />
        </motion.div>

        <motion.div className={`
          relative flex items-center justify-center transition-all

          hover:scale-105
        `}>
          <Top3 className={`
            w-4/5

            xl:w-2/3
          `} locale={locale} height={svgHeight} />
        </motion.div>
      </motion.div>
      <motion.p
        className={`
          w-full text-center text-base italic text-primary

          max-sm:text-sm
        `}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            bounce: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        {t('prizes.note')}
      </motion.p>
    </div>
  );
};

export default Prizes;
