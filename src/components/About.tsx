'use client';
import React from 'react';
import { FlipWords } from './ui/flip-words';
import { useTranslations } from 'next-intl';
import { SECTION_IDS } from '@/constants';
import { motion } from 'framer-motion';

const About = () => {
  const t = useTranslations('root');

  return (
    <div
      className='container border-2 border-transparent px-4 pt-10 md:pt-24 lg:px-20'
      id={SECTION_IDS.ABOUT}
    >
      <FlipWords
        className='font-montserrat text-xl font-extrabold uppercase !text-primary md:text-5xl'
        words={[t('about.title')]}
      />
      <div className='mx-auto mt-7 flex flex-col text-justify font-inter md:mt-12'>
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
            className='lg:px-2'
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
    </div>
  );
};

export default About;
