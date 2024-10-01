import { SECTION_IDS } from '@/constants';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import TimelineImage from '@/assets/Timeline';

interface TimelineProps {
  locale: string;
}

export default function Timeline({ locale }: TimelineProps) {
  const t = useTranslations('HomePage');

  return (
    <div
      className='card-gradient-border container relative mt-16 px-0 py-3 shadow-2xl backdrop-blur-sm md:mt-24 md:py-8 lg:py-10'
      id={SECTION_IDS.TIMELINE}
    >
      <motion.h2
        className='mb-2 text-center text-3xl font-extrabold uppercase text-primary md:text-5xl'
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
