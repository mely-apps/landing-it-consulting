import { motion } from 'framer-motion';
import React from 'react';

import { cn } from '@/lib/utils';

interface TitleProps {
  isActiveScroll?: boolean;
}
const Title = ({ isActiveScroll }: TitleProps) => {
  const titleClassName = cn(
    `
      invisible ml-[50px] mt-[70px] font-montserrat text-lg font-extrabold

      md:hidden

      sm:visible

      xl:block
    `,
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
