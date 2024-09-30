import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import TimelineImage from '@/assets/Timeline';
import { SECTION_IDS } from '@/constants';

interface TimelineProps {
  locale: string;
}

export default function Timeline({ locale }: TimelineProps) {
  const t = useTranslations('HomePage');

  return (
    <div
      className={`
        card-gradient-border container relative mt-44 w-11/12 px-0 py-3
        shadow-2xl backdrop-blur-sm

        lg:py-10

        md:py-8
      `}
      id={SECTION_IDS.TIMELINE}
    >
      <motion.h2
        className='text-center text-2xl font-extrabold uppercase text-primary'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, bounce: 0.5 },
        }}
        viewport={{ once: true }}
      >
        {t('timeline.title')}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, bounce: 0.5, delay: 0.4 },
        }}
        className='relative select-none'
        viewport={{ once: true }}
      >
        <TimelineImage className='w-full' locale={locale} />
      </motion.div>
    </div>
  );
}
