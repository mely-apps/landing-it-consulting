import { SECTION_IDS } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Organizer = () => {
  const t = useTranslations('root');

  return (
    <div className='container mt-16 px-4 md:mt-32' id={SECTION_IDS.ORGANIZERS}>
      <motion.h2
        className='flex w-full justify-center text-3xl font-extrabold uppercase text-primary md:text-5xl'
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
        {t('organizers.title')}
      </motion.h2>

      <div className='flex flex-col gap-y-4 md:gap-y-10'>
        <div className='mt-10 grid grid-cols-3 gap-3'>
          <motion.div
            className='card-gradient-border relative col-span-3 flex h-32 min-w-52 items-center justify-center shadow-lg sm:h-56 md:col-span-1 md:max-w-96'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <Image
              src={'/companies/codemely.png'}
              className='object-contain px-6 sm:px-10'
              alt=''
              fill
            />
          </motion.div>
          <div className='col-span-3 md:col-span-2'>
            <motion.p
              className='text-justify font-light lg:text-xl'
              initial={{
                opacity: 0.2,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, delay: 0.1 },
              }}
              viewport={{ once: true }}
            >
              {t.rich('organizers.codeMely.description', {
                bold: (chunks) => <span className='font-bold'>{chunks}</span>,
                codeMelyName: t('names.codeMelyName'),
              })}
            </motion.p>
          </div>
        </div>

        <div className='mt-10 grid grid-cols-3 gap-3'>
          <motion.div
            className='card-gradient-border relative col-span-3 flex h-32 min-w-52 items-center justify-center shadow-lg sm:h-56 md:col-span-1 md:max-w-96'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <Image
              src={'/companies/netcompany.png'}
              className='object-contain px-6 sm:px-10'
              alt=''
              fill
            />
          </motion.div>
          <div className='col-span-3 md:col-span-2'>
            <motion.p
              className='text-justify font-light lg:text-xl'
              initial={{
                opacity: 0.2,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.2, delay: 0.2 },
              }}
              viewport={{ once: true }}
            >
              {t.rich('organizers.netcompany.description', {
                bold: (chunks) => <span className='font-bold'>{chunks}</span>,
                netcompanyName: t('names.netcompanyName'),
              })}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizer;
