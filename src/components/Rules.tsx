import React, { useEffect, useRef } from 'react';
import GradualSpacing from './ui/gradual-spacing';
import { SECTION_IDS } from '@/constants';
import RulesMobile from '@/assets/RulesMobile';
import RulesDesktop from '@/assets/RulesDesktop';
import { useTranslations } from 'next-intl';
import { Tooltip } from 'react-tooltip';

interface RulesProps {
  locale?: string;
}

const Rules = ({ locale }: RulesProps) => {
  const t = useTranslations('HomePage');
  const ruleSectionRef = useRef<HTMLDivElement>(null);

  const points = [
    {
      id: 'url(#filter28_i_1076_7)',
      description: t('rules.description.0'),
    },
    {
      id: 'url(#filter29_i_1076_7)',
      description: t('rules.description.0'),
    },
    {
      id: 'url(#filter26_i_1076_7)',
      description: t('rules.description.1'),
    },
    {
      id: 'url(#filter27_i_1076_7)',
      description: t('rules.description.1'),
    },
    {
      id: 'url(#filter30_i_1076_7)',
      description: t('rules.description.2'),
    },
    {
      id: 'url(#filter31_i_1076_7)',
      description: t('rules.description.2'),
    },
    {
      id: 'url(#filter32_i_1076_7)',
      description: t('rules.description.3'),
    },
    {
      id: 'url(#filter33_i_1076_7)',
      description: t('rules.description.3'),
    },
    {
      id: 'url(#filter28_i_1012_7)',
      description: t('rules.description.0'),
    },
    {
      id: 'url(#filter29_i_1012_7)',
      description: t('rules.description.0'),
    },
    {
      id: 'url(#filter26_i_1012_7)',
      description: t('rules.description.1'),
    },
    {
      id: 'url(#filter27_i_1012_7)',
      description: t('rules.description.1'),
    },
    {
      id: 'url(#filter30_i_1012_7)',
      description: t('rules.description.2'),
    },
    {
      id: 'url(#filter31_i_1012_7)',
      description: t('rules.description.2'),
    },
    {
      id: 'url(#filter32_i_1012_7)',
      description: t('rules.description.3'),
    },
    {
      id: 'url(#filter33_i_1012_7)',
      description: t('rules.description.3'),
    },
  ];
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
          <p className='text-justify'>&quot;{t('rules.content')}&quot;</p>
        </div>
      </div>
      <div className='relative h-max w-full select-none' ref={ruleSectionRef}>
        <RulesDesktop className='hidden w-full sm:block' locale={locale} />
        <RulesMobile className='w-full sm:hidden' locale={locale} />
        {points.map((point) => (
          <Tooltip
            className='max-w-80 text-wrap text-justify'
            key={point.id}
            anchorSelect={`g[filter="${point.id}"]`}
            content={point.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Rules;
