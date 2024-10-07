'use client';
import { REGISTRATION_CLOSE_DATE, SECTION_IDS } from '@/constants';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import PersonalRegistrationForm from '@/components/PersonalRegistrationForm';
import { cn } from '@/lib/utils';
import TeamRegistrationForm from '@/components/TeamRegistrationForm';

const Registration = () => {
  const t = useTranslations('root');
  const [typeForm, setTypeForm] = React.useState<'team' | 'personal'>('team');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isFormClosed, setIsFormClosed] = useState(false);

  const toggleTypeForm = (type: 'team' | 'personal') => {
    setTypeForm(type);
  };

  const renderContent = () => {
    if (submitSuccess) {
      return <SuccessMessage />;
    }
    if (isFormClosed) {
      return <ClosedFormMessage />;
    }
    const isPersonalForm = typeForm === 'personal';

    return (
      <>
        <PersonalRegistrationForm
          hidden={isPersonalForm}
          onSubmitSuccess={() => setSubmitSuccess(true)}
          onRegistrationExpired={() => setIsFormClosed(true)}
        />
        <TeamRegistrationForm
          hidden={!isPersonalForm}
          onSubmitSuccess={() => setSubmitSuccess(true)}
          onRegistrationExpired={() => setIsFormClosed(true)}
        />
      </>
    );
  };
  useEffect(() => {
    setIsFormClosed(new Date() >= REGISTRATION_CLOSE_DATE);
  }, []);

  return (
    <div className='container px-4' id={SECTION_IDS.REGISTER}>
      <h2 className='text-center text-2xl font-extrabold uppercase text-primary md:text-5xl'>
        {t('registration.title')}
      </h2>

      <div className='card-gradient-border mx-auto mt-3 flex w-full flex-col items-center justify-center gap-y-6 p-10 px-4 md:mt-10 md:w-3/4 md:px-10'>
        {submitSuccess || isFormClosed || (
          <>
            <div className='grid w-full grid-cols-2 gap-y-6 text-center text-lg font-bold lg:text-3xl'>
              <button
                onClick={() => toggleTypeForm('team')}
                className={cn('uppercase transition-all', {
                  'text-primary': typeForm === 'team',
                })}
                type='button'
              >
                {t('registration.team.title')}
              </button>
              <button
                onClick={() => toggleTypeForm('personal')}
                className={cn('uppercase transition-all', {
                  'text-primary': typeForm === 'personal',
                })}
                type='button'
              >
                {t('registration.individual.title')}
              </button>
            </div>
            <div className='h-[4px] w-full bg-white'>
              <motion.div
                initial='team'
                animate={typeForm}
                className='h-full w-1/2 bg-primary'
                transition={{ duration: 0.3, type: 'spring' }}
                variants={{
                  team: { translateX: 0 },
                  personal: { translateX: '100%' },
                }}
              ></motion.div>
            </div>
          </>
        )}

        {renderContent()}
      </div>
    </div>
  );
};

const SuccessMessage = () => {
  const t = useTranslations('root');
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
        <p className='font-bold min-[400px]:text-lg'>
          {t('registration.success.title')}
        </p>
        <p className='font-bold min-[400px]:text-lg'>
          {t('registration.success.content')}
        </p>
      </motion.div>
    </>
  );
};

const ClosedFormMessage = () => {
  const t = useTranslations('root');
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
        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-red-500 p-2 text-center text-4xl font-bold'>
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
        <p className='font-bold min-[400px]:text-lg'>
          {t('registration.closed.title')}
        </p>
        <p className='font-bold min-[400px]:text-lg'>
          {t('registration.closed.content')}
        </p>
      </motion.div>
    </>
  );
};

export default Registration;
