import React from 'react';
import GradualSpacing from './ui/gradual-spacing';
import { SECTION_IDS } from '@/constants';
import RulesMobile from '@/assets/RulesMobile';
import RulesDesktop from '@/assets/RulesDesktop';
import { useTranslations } from 'next-intl';

const Rules = () => {
  const t = useTranslations('HomePage');

  return (
    <div
      className='card-gradient-border container mt-44 w-11/12 rounded-lg py-3 shadow-2xl backdrop-blur-sm sm:px-10 md:px-20 md:py-8 lg:py-10'
      id={SECTION_IDS.RULES}
    >
      <div className='grid grid-cols-4 gap-y-4'>
        <div className='col-span-4 flex max-lg:justify-center lg:col-span-1'>
          <GradualSpacing
            text={t('rules.title')}
            className='text-2xl font-extrabold uppercase !text-primary'
          />
        </div>
        <div className='col-span-4 lg:col-span-3'>
          <p className='text-justify text-base italic'>
            &quot;{t('rules.description')}&quot;
          </p>
        </div>
      </div>
      <div className='pointer-events-none relative h-max w-full select-none'>
        <RulesDesktop className='hidden w-full sm:block' />
        <RulesMobile className='w-full sm:hidden' />
      </div>
    </div>
  );
};

export default Rules;
