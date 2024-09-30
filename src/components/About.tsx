'use client';
import React from 'react';
import { FlipWords } from './ui/flip-words';
import { useTranslations } from 'next-intl';
import { SECTION_IDS } from '@/constants';
import { motion } from 'framer-motion';

const About = () => {
  const t = useTranslations('HomePage');

  return (
    <div
      className='container w-11/12 border-2 border-transparent pt-24 lg:px-20'
      id={SECTION_IDS.ABOUT}
    >
      <FlipWords
        className='font-montserrat text-2xl font-extrabold uppercase !text-primary'
        words={[t('about.title')]}
      />
      <div className='mx-auto mt-12 flex flex-col text-justify font-inter text-base'>
        {Array.from({ length: 2 }).map((_, index) => (
          <motion.p
            key={index}
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
            viewport={{ once: true }}
            className='lg:px-20'
          >
            {t.rich(`about.description.${index}`, {
              extrabold: (chunks) => (
                <span className='font-extrabold'>{chunks}</span>
              ),
              contestName: t('names.contestName'),
              netcompanyName: t('names.netcompanyName'),
              codeMelyName: t('names.codeMelyName'),
            })}
          </motion.p>
        ))}

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
          className='lg:px-20'
        >
          <p className='pt-8 font-bold'>
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
    </div>
  );
};

export default About;
