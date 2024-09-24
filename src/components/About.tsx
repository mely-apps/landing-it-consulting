'use client';
import React from 'react';
import { FlipWords } from './ui/flip-words';
import { useTranslations } from 'next-intl';
import { SECTION_IDS } from '@/constants';
import { motion } from 'framer-motion';

const About = () => {
  const t = useTranslations('HomePage');

  return (
    <div className='container pt-24' id={SECTION_IDS.ABOUT}>
      <FlipWords
        className='text-[50px] font-extrabold uppercase !text-primary'
        words={[t('about.heading')]}
      />
      <div className='mx-auto mt-12 flex max-w-[1280px] flex-col gap-8 font-inter text-xl italic'>
        <motion.p
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          }}
        >
          <span className='font-extrabold'>IT Consultant Challenge</span>
          —an exciting full-day event where IT students have the chance to
          showcase their skills, creativity, and problem-solving abilities. This
          event, hosted by
          <span className='font-extrabold'>{` Netcompany `}</span>
          and
          <span className='font-extrabold'>{` Code MeLy `}</span>, is your
          opportunity to step into the shoes of an IT consultant and tackle
          real-life challenges through digital transformation. Work alongside
          like-minded peers, gain valuable experience, and make a lasting
          impact.
        </motion.p>

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
        >
          <p className='font-bold'>Who can join the event?</p>
          <ul className='ml-10 list-disc'>
            <li>Background: IT, Software engineer</li>
            <li>2nd, 3rd year students</li>
            <li>Have passion with technology</li>
            <li>Have interest in exploring a role of an IT consultant</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
