import { SECTION_IDS } from '@/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Timeline() {
  return (
    <div
      className="md:px-20' container mt-44 h-max w-11/12 rounded-lg border-2 border-[#868686] bg-[#ccc]/10 p-4 py-10 shadow-2xl backdrop-blur-sm sm:px-10"
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
      >
        timeline
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, bounce: 0.5, delay: 0.4 },
        }}
        className='relative h-[300px] w-full select-none sm:h-[400px] lg:h-[550px] xl:h-[650px]'
      >
        <Image src={'/timeline.png'} className='object-contain' fill alt='' />
      </motion.div>
    </div>
  );
}
