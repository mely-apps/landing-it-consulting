'use client';
import { SECTION_IDS } from '@/constants';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import PersonalRegistrationForm from '@/components/PersonalRegistrationForm';
import { cn } from '@/lib/utils';
import TeamRegistrationForm from '@/components/TeamRegistrationForm';

const Registration = () => {
  const t = useTranslations('HomePage');
  const [typeForm, setTypeForm] = React.useState<'team' | 'personal'>(
    'personal',
  );
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isFormClosed, setIsFormClosed] = useState(false);

  const toggleTypeForm = (type: 'team' | 'personal') => {
    setTypeForm(type);
  };

  useEffect(() => {
    let intervalId = setInterval(() => {
      const now = new Date();
      const registrationCloseDate = new Date('2024-10-12T17:00:00Z'); // 13th Oct 2022, 00:00 GMT+7
      if (now >= registrationCloseDate) {
        setIsFormClosed(true);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='container' id={SECTION_IDS.REGISTER}>
      <h2 className='text-center text-2xl font-extrabold uppercase text-primary'>
        {t('registration.title')}
      </h2>

      <div className='card-gradient-border mx-auto mt-10 flex w-full flex-col items-center justify-center gap-y-6 p-10 sm:w-3/4'>
        {submitSuccess || isFormClosed || (
          <div className='grid w-full grid-cols-2 gap-y-6 text-center text-3xl font-bold'>
            <button
              onClick={() => toggleTypeForm('personal')}
              className={cn(
                'border-b-4 border-white pb-4 text-base uppercase transition-all sm:text-lg',
                { '!border-[#FFB84E] text-primary': typeForm === 'personal' },
              )}
              type='button'
            >
              {t('registration.individual.title')}
            </button>
            <button
              onClick={() => toggleTypeForm('team')}
              className={cn(
                'border-b-4 border-white pb-4 text-base uppercase transition-all sm:text-lg',
                { '!border-[#FFB84E] text-primary': typeForm === 'team' },
              )}
              type='button'
            >
              {t('registration.team.title')}
            </button>
          </div>
        )}
        {submitSuccess ? (
          <SuccessMessage />
        ) : isFormClosed ? (
          <ClosedFormMessage />
        ) : typeForm === 'personal' ? (
          <PersonalRegistrationForm
            onSubmitSuccess={() => setSubmitSuccess(true)}
          />
        ) : (
          <TeamRegistrationForm
            onSubmitSuccess={() => setSubmitSuccess(true)}
          />
        )}
      </div>
    </div>
  );
};

const SuccessMessage = () => {
  const t = useTranslations('HomePage');
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5, bounce: 0.5, delay: 0.4 },
        }}
        viewport={{ once: true }}
      >
        <Check className='h-16 w-16 rounded-full bg-primary p-2' />
      </motion.div>
      <motion.div
        className='text-center'
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5, bounce: 0.5, delay: 0.2 },
        }}
        viewport={{ once: true }}
      >
        <p className='text-base font-bold min-[400px]:text-lg'>
          {t('registration.success.title')}
        </p>
        <p className='text-base font-bold min-[400px]:text-lg'>
          {t('registration.success.content')}
        </p>
      </motion.div>
    </>
  );
};

const ClosedFormMessage = () => {
  const t = useTranslations('HomePage');
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5, bounce: 0.5, delay: 0.4 },
        }}
        viewport={{ once: true }}
      >
        <div className='h-16 w-16 rounded-full bg-red-500 p-2 text-center text-xl font-bold'>
          !
        </div>
      </motion.div>
      <motion.div
        className='text-center'
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5, bounce: 0.5, delay: 0.2 },
        }}
        viewport={{ once: true }}
      >
        <p className='text-base font-bold min-[400px]:text-lg'>
          {t('registration.closed.title')}
        </p>
        <p className='text-base font-bold min-[400px]:text-lg'>
          {t('registration.closed.content')}
        </p>
      </motion.div>
    </>
  );
};

export default Registration;
