import { SECTION_IDS } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Prizes = () => {
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
      >
        prizes
      </motion.h2>
      <motion.div
        className='mt-10 grid h-[200px] grid-cols-3 max-[870px]:gap-x-8 sm:mt-24 sm:h-[300px] md:h-[450px]'
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
      >
        <motion.div className='relative flex items-center justify-center transition-all hover:scale-105'>
          <Image
            src={'/prizes/top2.png'}
            className='object-contain'
            fill
            alt=''
          />
        </motion.div>

        <motion.div className='relative flex -translate-y-12 items-center justify-center transition-all hover:scale-105 sm:-translate-y-20'>
          <Image
            src={'/prizes/top1.png'}
            className='object-contain'
            fill
            alt=''
          />
        </motion.div>

        <motion.div className='relative flex items-center justify-center transition-all hover:scale-105'>
          <Image
            src={'/prizes/top3.png'}
            className='object-contain'
            fill
            alt=''
          />
        </motion.div>
      </motion.div>

      {/* <div className='mt-20 flex flex-col items-center gap-2'>
        <p className='text-lg font-extrabold text-white'>
          TỔNG GIẢI THƯỞNG LÊN ĐẾN
        </p>
        <p className='text-4xl font-extrabold text-[#E86F0B]'>30.000.000 VNĐ</p>
      </div> */}
    </div>
  );
};

export default Prizes;
