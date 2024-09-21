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
        className='mt-52 grid grid-cols-3 gap-x-10'
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
          <div className='absolute left-1/2 top-0 z-50 h-48 w-48 -translate-x-1/2 -translate-y-32'>
            <Image
              src={'/prizes/1.png'}
              className='object-contain'
              fill
              alt=''
            />
          </div>
          <div className='relative flex h-72 w-72 justify-center'>
            <div className='absolute left-0 top-0 h-full w-full'>
              <Image
                src={'/prizes/box.svg'}
                className='object-contain'
                fill
                alt=''
              />
            </div>
            <div className='mt-16 text-center'>
              <div className='relative mx-auto h-24 w-24'>
                <Image
                  src={'/prizes/award.png'}
                  className='object-contain'
                  fill
                  alt=''
                />
              </div>
              <div>
                <p className='mt-4 text-xl font-extrabold text-primary'>
                  2ND PRIZE
                </p>
                <p className='text-base'>8.000.000 VND</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className='relative flex -translate-y-10 items-center justify-center transition-all hover:scale-105'>
          <div className='absolute left-1/2 top-0 z-50 h-40 w-40 -translate-x-1/2 -translate-y-32'>
            <Image
              src={'/prizes/3.png'}
              className='object-contain'
              fill
              alt=''
            />
          </div>
          <div className='relative flex h-80 w-80 justify-center'>
            <div className='absolute left-0 top-0 h-full w-full'>
              <Image
                src={'/prizes/box.svg'}
                className='object-contain'
                fill
                alt=''
              />
            </div>
            <div className='mt-16 text-center'>
              <div className='relative mx-auto h-24 w-24'>
                <Image
                  src={'/prizes/award.png'}
                  className='object-contain'
                  fill
                  alt=''
                />
              </div>
              <div>
                <p className='mt-4 text-xl font-extrabold text-primary'>
                  1ST PRIZE
                </p>
                <p className='mt-2 text-base'>20.000.000 VND</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className='relative flex items-center justify-center transition-all hover:scale-105'>
          <div className='absolute left-1/2 top-0 z-50 h-48 w-48 -translate-x-1/2 -translate-y-32'>
            <Image
              src={'/prizes/2.png'}
              className='object-contain'
              fill
              alt=''
            />
          </div>
          <div className='relative flex h-64 w-64 justify-center'>
            <div className='absolute left-0 top-0 h-full w-full'>
              <Image
                src={'/prizes/box.svg'}
                className='object-contain'
                fill
                alt=''
              />
            </div>
            <div className='mt-12 text-center'>
              <div className='relative mx-auto h-16 w-16'>
                <Image
                  src={'/prizes/award.png'}
                  className='object-contain'
                  fill
                  alt=''
                />
              </div>
              <div>
                <p className='mt-4 text-xl font-extrabold text-primary'>
                  3RD PRIZE
                </p>
                <p className='text-base'>2.000.000 VND</p>
              </div>
            </div>
          </div>
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
