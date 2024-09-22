import { SECTION_IDS } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Organizer = () => {
  const t = useTranslations('HomePage');

  return (
    <div className='container mt-40' id={SECTION_IDS.ORGANIZERS}>
      <motion.h2
        className='flex w-full justify-center text-[50px] font-extrabold uppercase text-primary'
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
      >
        Organizers
      </motion.h2>

      <div className='flex flex-col gap-20'>
        <div className='mt-20 grid grid-cols-3 gap-x-10'>
          <motion.div
            className='relative col-span-1 flex h-56 w-96 items-center justify-center rounded-lg border border-white/40 bg-white/10 shadow-lg'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.2 },
            }}
          >
            <Image
              src={'/companies/codemely.png'}
              className='object-contain px-10'
              alt=''
              fill
            />
          </motion.div>
          <div className='col-span-2'>
            <motion.p
              className='text-2xl font-light leading-[1.3]'
              initial={{
                opacity: 0.2,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, delay: 0.1 },
              }}
            >
              <span className='font-bold'>Code MeLy</span>{' '}
              {t('organizers.codemely')}
            </motion.p>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-x-10'>
          <motion.div
            className='relative col-span-1 flex h-56 w-96 items-center justify-center rounded-lg border border-white/40 bg-white/10 shadow-lg'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3, delay: 0.2 },
            }}
          >
            <Image
              src={'/companies/netcompany.png'}
              className='object-contain px-10'
              alt=''
              fill
            />
          </motion.div>
          <div className='col-span-2'>
            <motion.p
              className='text-2xl font-light leading-[1.3]'
              initial={{
                opacity: 0.2,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.2, delay: 0.2 },
              }}
            >
              <span className='font-bold'>Netcompany</span>{' '}
              {t('organizers.netcompany')}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizer;
