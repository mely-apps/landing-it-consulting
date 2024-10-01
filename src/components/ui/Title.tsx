import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';
interface TitleProps {
  isActiveScroll?: boolean;
}
const Title = ({ isActiveScroll }: TitleProps) => {
  const titleClassName = cn(
    ' mt-[70px] ml-[50px] invisible font-montserrat text-3xl font-extrabold sm:visible md:hidden xl:block',
    { ['mt-[0px] md:block']: isActiveScroll },
  );
  return (
    <motion.div
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isActiveScroll ? 0.75 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 10,
      }}
      className={titleClassName}
    >
      <p className='text-white'>IT Consultant</p>
      <p className='text-primary'>Challenge</p>
    </motion.div>
  );
};

export default Title;
