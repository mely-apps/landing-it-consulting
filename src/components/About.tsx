'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { SECTION_IDS } from '@/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const t = useTranslations('root');

  return (
    <div
      className='container border-2 border-transparent px-4 py-16 md:py-24'
      id={SECTION_IDS.ABOUT}
    >
      {/* Header Section */}
      <div className='mb-12 flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12'>
        {/* Organizers */}
        <div className='flex flex-1 flex-col items-center'>
          <div className='mb-6 inline-block skew-x-[-20deg] border border-[#80FFF7] px-8 py-2'>
            <span className='font-montserrat text-lg font-bold uppercase text-white md:text-xl'>
              {t('about.organizers')}
            </span>
          </div>
          <div className='flex items-center gap-6'>
            <Image
              src='/companies/codemely.png'
              alt='Code MeLy'
              width={120}
              height={60}
              className='h-[100px] w-24 object-contain md:w-32'
            />
            <Image
              src='/companies/netcompany.png'
              alt='Netcompany'
              width={160}
              height={60}
              className='h-[100px] w-32 object-contain md:w-40'
            />
          </div>
        </div>

        {/* Event Partner */}
        <div className='flex flex-1 flex-col items-center'>
          <div className='mb-6 inline-block skew-x-[-20deg] border border-[#80FFF7] px-8 py-2'>
            <span className='font-montserrat text-lg font-bold uppercase text-white md:text-xl'>
              {t('about.eventPartner')}
            </span>
          </div>
          <div className='flex items-center gap-6'>
            <Image
              src='/companies/DevOi.png'
              alt='DevOi'
              width={120}
              height={60}
              className='h-[100px] w-24 object-contain md:w-32'
            />
            <Image
              src='/companies/DevWeb.png'
              alt='DevWeb'
              width={160}
              height={60}
              className='h-[100px] w-24 object-contain md:w-40'
            />
            <Image
              src='/companies/Viblo.png'
              alt='Viblo'
              width={120}
              height={60}
              className='h-[100px] w-24 object-contain md:w-32'
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='grid gap-6 lg:grid-cols-12 lg:gap-12'>
        {/* Left Column - Text Content - 5/12 */}
        <div className='flex flex-col justify-center lg:col-span-5'>
          <h2 className='mb-6 font-montserrat text-3xl font-extrabold uppercase text-primary md:text-4xl lg:text-5xl'>
            {t('about.sectionTitle')}
          </h2>

          <div className='space-y-4 font-inter text-sm leading-relaxed text-gray-300 md:text-base'>
            {Array.from({ length: 2 }).map((_, index) => (
              <p key={index}>
                {t.rich(`about.description.${index}`, {
                  extrabold: (chunks) => (
                    <span className='font-bold italic'>{chunks}</span>
                  ),
                  contestName: t('names.contestName'),
                  netcompanyName: t('names.netcompanyName'),
                  codeMelyName: t('names.codeMelyName'),
                })}
              </p>
            ))}
          </div>
        </div>

        {/* Right Column - Images - 7/12 */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-7'>
          {/* First Image Card */}
          <div className='flex flex-col'>
            <div className='relative mb-4'>
              <div className='absolute -left-2 -top-2 h-[1px] w-20 bg-cyan-400'></div>
              <div className='absolute -left-2 -top-2 h-20 w-[1px] bg-cyan-400'></div>
              <div className='absolute -bottom-2 -right-2 h-[1px] w-20 bg-cyan-400'></div>
              <div className='absolute -bottom-2 -right-2 h-20 w-[1px] bg-cyan-400'></div>
              <div className='absolute -bottom-2 -right-2 h-20 w-[1px] bg-cyan-400'></div>

              <div className='absolute -right-2 -top-2 h-[1px] w-20 bg-cyan-400'></div>
              <div className='absolute -right-2 -top-2 h-20 w-[1px] bg-cyan-400'></div>

              <div className='absolute -bottom-2 -left-2 h-20 w-[1px] bg-cyan-400'></div>
              <div className='absolute -bottom-2 -left-2 h-[1px] w-20 bg-cyan-400'></div>
              <Image
                src='/images/slider/12.jpg'
                alt='IT Consultant Challenge Journey'
                width={500}
                height={300}
                className='object-fit h-64 w-full'
              />
            </div>
            <p className='font-inter text-xs leading-relaxed text-gray-300 md:text-sm'>
              <span className='font-bold'>{t('about.miniChallenge')}</span>
            </p>
          </div>

          {/* Second Image Card */}
          <div className='flex flex-col'>
            <div className='relative'>
              <div className='absolute -left-2 -top-2 h-[1px] w-20 bg-cyan-400'></div>
              <div className='absolute -left-2 -top-2 h-20 w-[1px] bg-cyan-400'></div>
              <div className='absolute -bottom-2 -right-2 h-[1px] w-20 bg-cyan-400'></div>
              <div className='absolute -bottom-2 -right-2 h-20 w-[1px] bg-cyan-400'></div>
              <div className='absolute -bottom-2 -right-2 h-20 w-[1px] bg-cyan-400'></div>
              <div className='absolute -right-2 -top-2 h-[1px] w-20 bg-cyan-400'></div>
              <div className='absolute -right-2 -top-2 h-20 w-[1px] bg-cyan-400'></div>
              <div className='absolute -bottom-2 -left-2 h-20 w-[1px] bg-cyan-400'></div>
              <div className='absolute -bottom-2 -left-2 h-[1px] w-20 bg-cyan-400'></div>

              <Image
                src='/images/slider/1.jpg'
                alt='IT Consultant Challenge Team'
                height={200}
                width={400}
                className='object-fit h-64 w-full'
              />
            </div>
            <p className='mt-4 font-inter text-xs leading-relaxed text-gray-300 md:text-sm'>
              <span className='font-bold'>{t('about.workshop')}</span>
            </p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
        viewport={{ once: true }}
        // className='lg:px-20'
      >
        <p className='mb-2 mt-4 font-bold md:pt-8'>
          {t.rich('about.whoCanJoinQuestion', {
            bold: (chunks) => <span className='font-bold'>{chunks}</span>,
          })}
        </p>
        <ul className='ml-10 list-disc'>
          {Array.from({ length: 4 }).map((_, index) => (
            <li key={index}>{t(`about.whoCanJoinAnswers.${index}`)}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
