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
      id: 'url(#filter15_i_956_74)',
      description: 'Problem',
    },
    {
      id: 'url(#filter4_i_956_74)',
      description: 'Case Study',
    },
    {
      id: 'url(#filter2_i_956_74)',
      description: 'Requirements',
    },
    {
      id: 'url(#filter6_i_956_74)',
      description: 'Submission',
    },
    {
      id: 'url(#filter8_i_956_74)',
      description: 'Criteria',
    },
    { id: 'url(#filter10_i_956_74)', description: 'Analyse' },
    { id: 'url(#filter12_i_956_74)', description: 'technical' },
    { id: 'url(#filter14_i_956_74)', description: 'design' },
    { id: 'url(#filter18_i_956_74)', description: 'PRIZE' },
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
          <p className='text-justify text-base italic'>
            &quot;{t('rules.description')}&quot;
          </p>
        </div>
      </div>
      <div className='relative h-max w-full select-none' ref={ruleSectionRef}>
        <RulesDesktop className='hidden w-full sm:block' locale={locale} />
        <RulesMobile className='w-full sm:hidden' locale={locale} />
        {points.map((point) => (
          <Tooltip
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
