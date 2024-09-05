import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const isBrowser = () => typeof window !== 'undefined';
const ScrollToTop = () => {
  const scrollToTop = () => {
    console.log('🚀 ~ scrollToTop ~ isBrowser:', isBrowser());
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      onClick={scrollToTop}
      className='fixed bottom-4 right-4 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#226472] opacity-40 transition-all hover:opacity-100'
    >
      <motion.div
        className='flex h-full w-full items-center justify-center overflow-hidden'
        initial={{
          opacity: 1,
          y: 0,
        }}
        whileHover={{
          opacity: [0, 1],
          y: [10, 0],
          transition: {
            duration: 0.5,
          },
        }}
      >
        <FaArrowUp />
      </motion.div>
    </motion.div>
  );
};

export default ScrollToTop;
