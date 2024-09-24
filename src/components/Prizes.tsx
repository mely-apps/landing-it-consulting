import { SECTION_IDS } from '@/constants';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Top1Desktop,
  Top1Mobile,
  Top2Desktop,
  Top2Mobile,
  Top3Desktop,
  Top3Mobile,
} from '@/assets/Prizes';

interface PrizesProps {
  locale?: string;
}

const Prizes = ({ locale }: PrizesProps) => {
  const t = useTranslations('HomePage');

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
        <motion.div className='relative flex items-center justify-center transition-all hover:scale-105'>
          <Top2Desktop className='w-2/3 max-sm:hidden' locale={locale} />
          <Top2Mobile className='w-full sm:hidden' locale={locale} />
        </motion.div>

        <motion.div className='relative flex -translate-y-12 items-center justify-center transition-all hover:scale-105 sm:-translate-y-20'>
          <Top1Desktop className='w-2/3 max-sm:hidden' locale={locale} />
          <Top1Mobile className='w-full sm:hidden' locale={locale} />
        </motion.div>

        <motion.div className='relative flex items-center justify-center transition-all hover:scale-105'>
          <Top3Desktop className='w-2/3 max-sm:hidden' locale={locale} />
          <Top3Mobile className='w-full sm:hidden' locale={locale} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Prizes;
